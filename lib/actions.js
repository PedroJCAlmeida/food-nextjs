"use server";

export async function shareMeal(){
    const meal ={
      title: formData.get("title"),
      summary: formData.get("summary"),
      istructions: formData.get("instructions"),
      image: formData.get("image"),
      creator: formData.get("name"),
      creator_email: formData.get("email"),

    }
  }