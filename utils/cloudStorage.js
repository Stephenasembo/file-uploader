require('dotenv').config()

const { createClient } = require('@supabase/supabase-js')
const storageUrl = process.env.STORAGE_URL;
const storageAPI = process.env.STORAGE_API;
const supabase = createClient(storageUrl, storageAPI)

async function uploadFile(userId, file) {
  const uploadLocation = `public/${userId}/${file.originalname}-${Date.now()}`
  const { data, error } = await supabase.storage
    .from('user-files')
    .upload(uploadLocation, file.buffer)
  if(error) return error;
  return data;
}

async function downloadFile(filePath) {
  const { data, error } = await supabase
  .storage
  .from('user-files')
  .getPublicUrl(filePath, {
    download: true
  })
  if(error) {
    console.error(error);
    return error
  };
  return data.publicUrl;
}

module.exports = {
  uploadFile,
  downloadFile,
}