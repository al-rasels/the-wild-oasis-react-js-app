import supabase, { supabaseUrl } from "./supabase";

export default async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

/*https://khnnysuwudzgvtmjgvil.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2024-01-13T15%3A55%3A26.295Z */

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  console.log(hasImagePath, newCabin.image);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create / Edit cabin
  let query = supabase.from("cabins");

  //A. Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //B. Edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }
  // 2. Upload the image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. Delete th cabin  If there was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabins image could not be uploaded and the cabin was not created"
    );
  }
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
}
