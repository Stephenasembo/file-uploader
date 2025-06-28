require('dotenv').config()

const { createClient } = require('@supabase/supabase-js')
const storageUrl = process.env.STORAGE_URL;
const storageAPI = process.env.STORAGE_API;
const store = process.env.PRIVATE_STORE;
const supabase = createClient(storageUrl, storageAPI)

async function uploadFile(userId, file) {
  const uploadLocation = `public/${userId}/${file.originalname}-${Date.now()}`
  const { data, error } = await supabase.storage
    .from(store)
    .upload(uploadLocation, file.buffer)
  if(error) return error;
  return data;
}

async function downloadFile(filePath) {
  const { data, error } = await supabase
  .storage
  .from(store)
  .createSignedUrl(filePath, 120, {
    download: true,
  })
  if(error) return console.error(error);
}

async function deleteFile(storagePath) {
  const { data, error } = await supabase
  .storage
  .from(store)
  .remove([storagePath])
  if(error) return console.error(error)
  return;
}

async function deleteFolderFiles(files) {
  const paths = files.map((file) => file.storagePath)
  const { data, error } = await supabase
  .storage
  .from(store)
  .remove(paths)
  if(error) return console.error(error)
  return;

}

module.exports = {
  uploadFile,
  downloadFile,
  deleteFile,
  deleteFolderFiles,
}