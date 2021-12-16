export default interface IRecipe {
    id: string;
    title: string;
    pictures: PictureFormat[],//should 
    type: string,
    prepTime: string
}
type PictureFormat = {
    identifier: string,
    height: number
    url: string
    width: number;
}