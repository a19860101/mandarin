new Vue({
    el:"#area",
    data:{
        tc:{
            title:[
                'images/TC/D_TC_Map_1w.png',
                'images/TC/D_TC_Map_2w.png',
                'images/TC/D_TC_Map_3w.png',
                'images/TC/D_TC_Map_4w.png',
                'images/TC/D_TC_Map_5w.png',
                'images/TC/D_TC_Map_6w.png'
            ],
            s:[
                'images/TC/pic/D_TC_Pic_1.png',
                'images/TC/pic/D_TC_Pic_2.png',
                'images/TC/pic/D_TC_Pic_3.png',
                'images/TC/pic/D_TC_Pic_4.png',
                'images/TC/pic/D_TC_Pic_5.png',
                'images/TC/pic/D_TC_Pic_6.png',
            ],
            b:[
                'images/TC/pic/D_TC_Pic_1b.png',
                'images/TC/pic/D_TC_Pic_2b.png',
                'images/TC/pic/D_TC_Pic_3b.png',
                'images/TC/pic/D_TC_Pic_4b.png',
                'images/TC/pic/D_TC_Pic_5b.png',
                'images/TC/pic/D_TC_Pic_6b.png'
            ],
            desc:[
                '高美濕地是位於大甲溪出海口南側的野生動物保護區，擁有豐富的天然資源，是國內少數幾處雁鴨集體繁殖區之一。曾在高美濕地棲息的鳥類有多達120餘種，目前已逐漸取代大肚溪口，成為喜好賞鳥人士的朝聖地點。',
                '審計新村，是由省府時期審計處員工宿舍改建而成的新興文創聚落。一旁緊鄰著的是綠色廣場「草悟道」，北起國立自然科學博物館、南至美術園道綠園道的帶狀都市空間架構，只要漫步其中，就能感受此處的文藝氣息。',
                '臺中火車站旁的宮原眼科，是由日本眼科博士宮原武熊於日治時代興建的眼科診所，目前轉為經營甜點及伴手禮商品。一樓販售珍珠奶茶，以及台灣茶葉與水果口味的冰淇淋，讓旅客能一次品嘗多種到地的台灣風味。',
                '逢甲夜市是逢甲大學周圍的知名大型商圈夜市。以文華路、福星路為核心區域，目前是臺灣規模最大的夜市。因逢甲夜市駐進許多創新、多元的美食小吃所以與基隆廟口夜市共同取得「台灣最美味夜市」頭銜。',
                '位於西屯區的台中歌劇院共有6層空間，包含大劇院、中劇院、空中花園以及商場店鋪；地下2層則有黑盒子小劇場、排練室、機械室、裝卸停車場等場地，是一個大型的展演空間，每年舉辦各式各樣的演出及展覽。',
                '位於台中市北屯區的心之芳庭，擁有猶如童話故事般的夢幻莊園，園區會隨著不同節慶換上應景的裝飾並搭配節日舉辦活動，是個適合全家大小一同遊樂的地方，也是眾多新人舉辦婚禮的熱門場地。'
            ],
            titleOutput:'images/TC/D_TC_Map_1w.png',
            descOutput:'高美濕地是位於大甲溪出海口南側的野生動物保護區，擁有豐富的天然資源，是國內少數幾處雁鴨集體繁殖區之一。曾在高美濕地棲息的鳥類有多達120餘種，目前已逐漸取代大肚溪口，成為喜好賞鳥人士的朝聖地點。',
            sOutput:'images/TC/pic/D_TC_Pic_1.png',
            bOutput:'images/TC/pic/D_TC_Pic_1b.png'
        }
    },
    methods:{
        change(v){
            console.log(v)
            this.tc.titleOutput = this.tc.title[v];
            this.tc.descOutput = this.tc.desc[v];
            this.tc.sOutput = this.tc.s[v];
            this.tc.bOutput = this.tc.b[v];
        }
    }
})