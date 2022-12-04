import { IAuthData, ReplyToSendAuthData } from "../store/types/authTypes";
import { ICharacterResults, ICharacters } from "../store/types/charatersType";

export const charactersAPI = {
  async getCharacters(link: string | undefined): Promise<ICharacters> {
    let response = link
      ? await fetch(link)
      : await fetch(`https://rickandmortyapi.com/api/character?page=1`);
    return await response.json();
  },
  async getSignleCharacter(id: string | undefined): Promise<ICharacterResults> {
    let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    return await response.json();
  }
};

export const authAPI = {
  async sendAuthData(authData: IAuthData): Promise<ReplyToSendAuthData> {
    let response = await fetch("http://localhost:8080/authData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authData)
    });
    return await response.json();
  }
};
