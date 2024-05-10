"use server"
import cloudinary from 'cloudinary';


export async function setAsFavoriteAction(
    publicId:string,
    isFavorite: boolean
) {
    if (isFavorite){
        console.log("removing favorite from" + publicId);
        cloudinary.v2.uploader.add_tag('favorite', [publicId]);
        
    } else {
        cloudinary.v2.uploader.remove_tag('favorite', [publicId]);
    }
}