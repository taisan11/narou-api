import ky from "ky";
import { withQuery } from "ufo";
import { attr2of } from "./type";
import type { ordertype, typetype, userodertype } from "./type";
import pako from "pako";

const base = 'https://api.syosetu.com/novelapi/api/'
const urlbase = withQuery(base, {out: 'json'})
export async function serch({of, lim,order,word,notword,type,userid}: {of: string[], lim: number, order: ordertype, word: string, notword?: string,type?: typetype,userid?: string}) {
    //@ts-ignore
    const attributes = of.map(attr => attr2of[attr]);
    const ofresult = attributes.join("-");
    if (lim > 500|| lim < 1) {throw new Error(`lim error`);}
    console.log(withQuery(urlbase, {of: ofresult,lim,order,word,notword,type}))
    const result = (await ky.get(withQuery(urlbase, {of: ofresult,lim,order,word,notword,type})));
    return result.json()
}
export async function get({ncode}: {ncode: string}) {
    const url = withQuery(urlbase, {ncode});
    return await ky.get(url).json();
}
//TSDOC
/*
*@param {rtype} yyyymmdd-m,d,q,wを指定します、制約が多いのでこうしきさいとを見てください
*@param {string} ncode - 小説のncode
*/
export async function rank({rtype}: {rtype: string}) {
    const url = 'https://api.syosetu.com/rank/rankget/'
    return await ky.get(withQuery(url, {out:'json',rtype})).json();
}
export async function user({lim,order}: {lim: number,order: userodertype}) {
    const url = 'https://api.syosetu.com/userapi/api/'
    if (lim > 500|| lim < 1) {throw new Error(`lim error`);}
    return await ky.get(withQuery(url, {out:'json',order,lim})).json();
}
export async function getuser({userid}: {userid: number}) {}