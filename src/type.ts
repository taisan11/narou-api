export type a = {

}

export type ordertype = 'new'|'favnovelcnt'|'reviewcnt'|'hyoka'|'hyokaasc'|'dailypoint'|'weeklypoint'|'monthlypoint'|'quarterpoint'|'yearlypoint'|'impressioncnt'|'hyokacnt'|'hyokacntasc'|'weekly'|'lengthdesc'|'lengthasc'|'ncodedesc'|'old'

// 項目から of パラメータへの対応付け
export const attr2of = {
    "title": "t",
    "ncode": "n",
    "userid": "u",
    "writer": "w",
    "story": "s",
    "biggenre": "bg",
    "genre": "g",
    "keyword": "k",
    "general_firstup": "gf",
    "general_lastup": "gl",
    "noveltype": "nt",
    "end": "e",
    "general_all_no": "ga",
    "length": "l",
    "time": "ti",
    "isstop": "i",
    "isr15": "ir",
    "isbl": "ibl",
    "isgl": "igl",
    "iszankoku": "izk",
    "istensei": "its",
    "istenni": "iti",
    "pc_or_k": "p",
    "global_point": "gp",
    "daily_point": "dp",
    "weekly_point": "wp",
    "monthly_point": "mp",
    "quarter_point": "qp",
    "yearly_point": "yp",
    "fav_novel_cnt": "f",
    "impression_cnt": "imp",
    "review_cnt": "r",
    "all_point": "a",
    "all_hyoka_cnt": "ah",
    "sasie_cnt": "sa",
    "kaiwaritu": "ka",
    "novelupdated_at": "nu",
    "updated_at": "ua",
}

export type typetype = 't'|'r'|'er'|'re'|'ter'
export type rtypetype = 'd'|'w'|'m'|'q'|'y'|'quarter'|'year'|'all'
//
//   !!!!!USER!!!!!
//
export type userodertype = 'new'|'novelcnt'|'reviewcnt'|'novellength'|'sumglobalpoint'|'old'
export type int = number;