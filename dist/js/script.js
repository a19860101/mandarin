new Vue({
    el:"#tc",
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
new Vue({
    el:"#td",
    data:{
        title:[
            'images/TD/D_TD_Map_1w.png',
            'images/TD/D_TD_Map_2w.png',
            'images/TD/D_TD_Map_3w.png',
            'images/TD/D_TD_Map_4w.png',
            'images/TD/D_TD_Map_5w.png',
            'images/TD/D_TD_Map_6w.png',
            'images/TD/D_TD_Map_7w.png',
            'images/TD/D_TD_Map_8w.png'
        ],
        s:[
            'images/TD/pic/D_TD_Pic_1.png',
            'images/TD/pic/D_TD_Pic_2.png',
            'images/TD/pic/D_TD_Pic_3.png',
            'images/TD/pic/D_TD_Pic_4.png',
            'images/TD/pic/D_TD_Pic_5.png',
            'images/TD/pic/D_TD_Pic_6.png',
            'images/TD/pic/D_TD_Pic_7.png',
            'images/TD/pic/D_TD_Pic_8.png'
        ],
        b:[
            'images/TD/pic/D_TD_Pic_1b.png',
            'images/TD/pic/D_TD_Pic_2b.png',
            'images/TD/pic/D_TD_Pic_3b.png',
            'images/TD/pic/D_TD_Pic_4b.png',
            'images/TD/pic/D_TD_Pic_5b.png',
            'images/TD/pic/D_TD_Pic_6b.png',
            'images/TD/pic/D_TD_Pic_7b.png',
            'images/TD/pic/D_TD_Pic_8b.png'
        ],
        desc:[
            '位於臺東縣成功鎮東北方的三仙台，是個欣賞曙光的好地點。此地原是一處岬角，因海水日夜侵蝕岬角頸部斷離，而成為離岸島。三仙台擁有海蝕溝、壼穴、海蝕柱、海蝕凹壁等海蝕景觀，旅客可由八拱跨海步橋登島遊覽。',
            '伯朗大道正式名稱為錦新三號道路，全長約2.2公里，每逢稻穗成熟時，道路兩旁無際的稻穗隨風搖曳，優美的稻浪景緻是許多知名廣告的取景地點，此地因拍攝伯朗咖啡廣告而聲名大噪，民眾將這條道路暱稱為「伯朗大道」。',
            '位於台東市區的臺東森林公園交通位置非常便利，沿著馬亨亨大道直行即可到達，公園腹地遼闊令人心曠神怡。綠意盎然的臺東森林公園，非常適合騎著單車暢遊，沿途欣賞河口海濱溼地生態與茂盛的森林。',
            '位於台東市新生路上的鐵花村，是由臺鐵貨倉宿舍改造而成的一個音樂聚落．慢市集。由於臺東是一個充滿原住民音樂人才的地方，為了培育這個土地上的音樂資產，鐵花村給了臺東原住民創作人才一個自由發表的舞台。',
            '多良火車站原為臺鐵招呼站，因業務清淡於2006年結束營業並正式裁撤。因站在此處可鳥瞰從太平洋上方奔馳而過的火車，而被譽為全臺灣最美車站，吸引許多鐵道迷前來朝聖，如今多良車站觀景台已完成整建工程，並重新開放。',
            '位於台東縣鹿野鄉的鹿野高台，因其擁有特殊的地理條件，而成為進行滑草、飛行傘、滑翔翼等休閒活動的絕佳場地。每年的六月初至八月，正是鹿野高台舉辦國際熱氣球嘉年華及光雕音樂會的活動期間。',
            '舊名為火燒島的綠島，位於臺東市東方約33公里的海面上，是海底火山噴發所成的島嶼，受風化及海水侵蝕，擁有曲折多變的海岸景觀。在戒嚴時期綠島曾經關押著許多政治犯，如今綠島監獄也成為一處觀光景點。',
            '位於台東縣東南處的蘭嶼，舊稱紅頭嶼，因白色蝴蝶蘭響譽國際，而改名為「蘭嶼」。島上居住著達悟族人，其生活方式與傳統習俗皆繞著飛魚文化，重視自然共生的理念；每年春夏的「飛魚季」也成為探訪蘭嶼的最佳時機。'
        ],
        titleOutput:'images/TD/D_TD_Map_1w.png',
        descOutput:'位於臺東縣成功鎮東北方的三仙台，是個欣賞曙光的好地點。此地原是一處岬角，因海水日夜侵蝕岬角頸部斷離，而成為離岸島。三仙台擁有海蝕溝、壼穴、海蝕柱、海蝕凹壁等海蝕景觀，旅客可由八拱跨海步橋登島遊覽。',
        sOutput:'images/TD/pic/D_TD_Pic_1.png',
        bOutput:'images/TD/pic/D_TD_Pic_1b.png'
    },
    methods:{
        change(v){
            this.titleOutput = this.title[v];
            this.descOutput = this.desc[v];
            this.sOutput = this.s[v];
            this.bOutput = this.b[v];
        }
    }
})
new Vue({
    el:"#hl",
    data:{
        title:[
            'images/HL/D_HL_Map_1w.png',
            'images/HL/D_HL_Map_2w.png',
            'images/HL/D_HL_Map_3w.png',
            'images/HL/D_HL_Map_4w.png',
            'images/HL/D_HL_Map_5w.png',
            'images/HL/D_HL_Map_6w.png',
            'images/HL/D_HL_Map_7w.png'
        ],
        s:[
            'images/HL/pic/D_HL_Pic_1.png',
            'images/HL/pic/D_HL_Pic_2.png',
            'images/HL/pic/D_HL_Pic_3.png',
            'images/HL/pic/D_HL_Pic_4.png',
            'images/HL/pic/D_HL_Pic_5.png',
            'images/HL/pic/D_HL_Pic_6.png',
            'images/HL/pic/D_HL_Pic_7.png'
        ],
        b:[
            'images/HL/pic/D_HL_Pic_1b.png',
            'images/HL/pic/D_HL_Pic_2b.png',
            'images/HL/pic/D_HL_Pic_3b.png',
            'images/HL/pic/D_HL_Pic_4b.png',
            'images/HL/pic/D_HL_Pic_5b.png',
            'images/HL/pic/D_HL_Pic_6b.png',
            'images/HL/pic/D_HL_Pic_7b.png'
        ],
        desc:[
            '太魯閣國家公園隸屬花蓮縣秀林鄉，是台灣第四座成立的國家公園，公園面積共計九萬二千公頃。境內地勢高聳，山巒起伏，沿途可欣賞壯麗的峽谷斷崖及眾多渾然天成的自然奇觀，令人嘆為觀止。',
            '砂卡礑步道從入口處到三間屋全長約4.1公里，綿延著砂卡礑溪而行。砂卡礑溪流長達16公里，步道沿途欣賞峻秀的峽谷以及清澈的溪水和美麗的岩石；步道沿途過去曾有多個原住民聚落，讓砂卡礑步道兼具景觀生態與人文之美。',
            '東大門夜市位在花蓮市六期重劃區，是由福町夜市、各省一條街、原住民一條街以及自強夜市所組成的夜市商圈，共計超過四百個攤位。夜市內除了傳統的小吃店家與遊戲攤位之外，還有許多具當地特色的原住民美食餐廳。',
            '六十石山位於花東縱谷平原的富里鄉東側，其山系屬於海岸山脈。每年的八月初至九月底為金針花盛開的季節，來到六十石山，彷彿置身在一片金黃色的花海之中，美麗的畫面吸引了各地旅客前來拜訪。',
            '七星潭原本位於花蓮機場東側，因形狀類似北斗七星，故名七星潭。日據時期，為建設機場填平了七星潭，而當地居民為懷念七星潭，就將遷居地點的月牙灣稱呼為七星潭。現今的七星潭並非潭，而是瀕臨太平洋的弧形海灣。',
            '清水斷崖位於清水山東側，自蘇花公路綿延21公里，沿途緊臨峭壁區域常有落石，在欣賞多層次的湛藍海水時也須特別注意自身安全。也可以從崇德海灘乘獨木舟，靠近壯觀的清水斷崖，在大海上欣賞大自然的鬼斧神工。',
            '花蓮的東海岸除了迷人的景致外，也蘊含了豐富的海洋資源，每年春夏之際，正是賞鯨的最佳季節，因天候穩定，幾乎每趟出航的船隻都能順利地與鯨豚相遇。由於每艘船皆有安全限載人數，建議想賞鯨的旅客出發前預先訂位。'

        ],
        titleOutput:'images/HL/D_HL_Map_1w.png',
        descOutput:'太魯閣國家公園隸屬花蓮縣秀林鄉，是台灣第四座成立的國家公園，公園面積共計九萬二千公頃。境內地勢高聳，山巒起伏，沿途可欣賞壯麗的峽谷斷崖及眾多渾然天成的自然奇觀，令人嘆為觀止。',
        sOutput:'images/HL/pic/D_HL_Pic_1.png',
        bOutput:'images/HL/pic/D_HL_Pic_1b.png'
    },
    methods:{
        change(v){
            this.titleOutput = this.title[v];
            this.descOutput = this.desc[v];
            this.sOutput = this.s[v];
            this.bOutput = this.b[v];
        }
    }
})
new Vue({
    el:"#km",
    data:{
        title:[
            'images/KM/D_KM_Map_1w.png',
            'images/KM/D_KM_Map_2w.png',
            'images/KM/D_KM_Map_3w.png',
            'images/KM/D_KM_Map_4w.png',
            'images/KM/D_KM_Map_5w.png',
            'images/KM/D_KM_Map_6w.png'
        ],
        s:[
            'images/KM/pic/D_KM_Pic_1.png',
            'images/KM/pic/D_KM_Pic_2.png',
            'images/KM/pic/D_KM_Pic_3.png',
            'images/KM/pic/D_KM_Pic_4.png',
            'images/KM/pic/D_KM_Pic_5.png',
            'images/KM/pic/D_KM_Pic_6.png'
        ],
        b:[
            'images/KM/pic/D_KM_Pic_1b.png',
            'images/KM/pic/D_KM_Pic_2b.png',
            'images/KM/pic/D_KM_Pic_3b.png',
            'images/KM/pic/D_KM_Pic_4b.png',
            'images/KM/pic/D_KM_Pic_5b.png',
            'images/KM/pic/D_KM_Pic_6b.png'
        ],
        desc:[
            '大膽島隸屬烈嶼鄉，抵達小金門後還需要轉乘小船才能登島，有「戰地秘境中的秘境」之稱，大膽島觀光採用預約登島制，拜訪大膽島之前須先到官方網站進行申請，並且完成門票費用匯款後才能登島，是個相當神秘的景點。',
            '莒光樓位於金門縣金城鎮，建立於民國41年，其最初建造目的為表彰在古寧頭戰役和八二三炮戰中表現卓越的中華民國國軍官兵，主要為紀念胡璉將軍。莒光樓共有三層，旅人可登至樓頂眺望廈門及金門風光。',
            '水頭聚落是從前金門最富有的聚落，聚落內保存了許多傳統閩式建築與中西合璧的洋樓建築。水頭位於金城鎮的西南隅，又名為金水，是個以黃氏為主的多姓聚落，因鄰近水頭碼頭，早期為金門與廈門之間的交通要津。',
            '位於瓊林聚落裡的紅磚樹牆，是由藝術家吳鼎信及他的子女共同建造而成的作品。樹牆使用傳統窯燒紅磚打造多達5千片的花朵及樹葉，在這面牆的左側，還可見「瓊林」之名的由來，如今成為金門最新的打卡景點。',
            '陳景蘭洋樓是一位旅居新加坡的金門僑商陳景蘭於1921年興建的洋樓宅第，也是金門現有規模最大且保存最完善的一棟洋樓。洋樓的內部展示著華橋的歷史以及洋樓建築過程，正前方還有一座金湯公園，是個值得拜訪的景點。',
            '翟山坑道早期為軍用之戰備水道，水道呈A字形，全長357公尺；坑道建築全由人力開挖穿鑿，耗時5年完工，坑道外海浪澎湃，潮聲勢壯。坑道於87年7月正式開放參觀，並成立翟山坑道管理站，是不可錯過的觀光景點。'

        ],
        titleOutput:'images/KM/D_KM_Map_1w.png',
        descOutput:'大膽島隸屬烈嶼鄉，抵達小金門後還需要轉乘小船才能登島，有「戰地秘境中的秘境」之稱，大膽島觀光採用預約登島制，拜訪大膽島之前須先到官方網站進行申請，並且完成門票費用匯款後才能登島，是個相當神秘的景點。',
        sOutput:'images/KM/pic/D_KM_Pic_1.png',
        bOutput:'images/KM/pic/D_KM_Pic_1b.png'
    },
    methods:{
        change(v){
            this.titleOutput = this.title[v];
            this.descOutput = this.desc[v];
            this.sOutput = this.s[v];
            this.bOutput = this.b[v];
        }
    }
})
new Vue({
    el:"#ph",
    data:{
        title:[
            'images/PH/D_PH_Map_1w.png',
            'images/PH/D_PH_Map_2w.png',
            'images/PH/D_PH_Map_3w.png',
            'images/PH/D_PH_Map_4w.png',
            'images/PH/D_PH_Map_5w.png',
            'images/PH/D_PH_Map_6w.png',
            'images/PH/D_PH_Map_7w.png'
        ],
        s:[
            'images/PH/pic/D_PH_Pic_1.png',
            'images/PH/pic/D_PH_Pic_2.png',
            'images/PH/pic/D_PH_Pic_3.png',
            'images/PH/pic/D_PH_Pic_4.png',
            'images/PH/pic/D_PH_Pic_5.png',
            'images/PH/pic/D_PH_Pic_6.png',
            'images/PH/pic/D_PH_Pic_7.png'
        ],
        b:[
            'images/PH/pic/D_PH_Pic_1b.png',
            'images/PH/pic/D_PH_Pic_2b.png',
            'images/PH/pic/D_PH_Pic_3b.png',
            'images/PH/pic/D_PH_Pic_4b.png',
            'images/PH/pic/D_PH_Pic_5b.png',
            'images/PH/pic/D_PH_Pic_6b.png',
            'images/PH/pic/D_PH_Pic_7b.png'
        ],
        desc:[
            '位在澎湖西嶼的大菓葉柱狀玄武岩，是日治時期為了建造碼頭，而意外挖掘出的壯麗自然景觀。因為土質與出土時間較晚，大菓葉玄武岩的色澤偏黃。柱狀玄武岩在大雨過後會與前方的積水相互輝映，畫面蔚為壯觀。',
            '漁翁島燈塔始建於1778年，名為「西嶼塔燈」，至1875年改建為西洋式構造，命名為「漁翁島燈塔」，如今所見。漁翁島即為西嶼，西嶼全島面積17.8平方公里，與澎湖本島及白沙島三島鼎足而立，是澎湖群島的三大島嶼之一。',
            '澎湖跨海大橋全長共計2,494公尺，橫跨「白沙島」和「西嶼」兩島之間的吼門水道，此處水流湍急，為澎湖海域第二險流。每當東北季風來臨，更是怒濤洶湧，難以行船，1965年開始興建跨海大橋，以解決往來漁翁島的交通困境。',
            '位於觀音亭海濱公園內的西瀛虹橋，是澎湖地區第一座鋼拱橋。搭配七彩霓虹燈的照明設備，夜間照明色彩正是虹的原子光譜。而這裡也是澎湖海上花火節的舉辦地點，霓虹燈的七彩搭配燦爛的煙火，讓澎湖的夜晚更加美麗。',
            '位在馬公市新復里的篤行十村是全台最古老的眷村。日治時期，日本軍隊進駐後所興建的宿舍就是篤行十村的前身。政府於民國95年將眷舍列入歷史建築保存，規劃為「眷村文化園區」，如今古老的眷村已成為新興文創聚落。',
            '澎湖天后宮是台灣最早建立的媽祖廟，被列為「國定古蹟」。早期漁民為保佑出海船隻與作業平安，會在船上供奉媽祖以求庇佑，後期則在定居澎湖後移至岸上建廟奉祀，儘管廟宇年久褪色，仍能感受當時細緻雕工。',
            '石滬是利用玄武岩和珊瑚礁所砌築而成的捕魚陷阱，也是先民智慧的展現。雙心石滬是澎湖地區眾多石滬中，留存最完整的石滬，若想欣賞雙心石滬，必須事先確認每日的退潮時間，才能夠目睹完整的雙心石滬。'

        ],
        titleOutput:'images/PH/D_PH_Map_1w.png',
        descOutput:'位在澎湖西嶼的大菓葉柱狀玄武岩，是日治時期為了建造碼頭，而意外挖掘出的壯麗自然景觀。因為土質與出土時間較晚，大菓葉玄武岩的色澤偏黃。柱狀玄武岩在大雨過後會與前方的積水相互輝映，畫面蔚為壯觀。',
        sOutput:'images/PH/pic/D_PH_Pic_1.png',
        bOutput:'images/PH/pic/D_PH_Pic_1b.png'
    },
    methods:{
        change(v){
            this.titleOutput = this.title[v];
            this.descOutput = this.desc[v];
            this.sOutput = this.s[v];
            this.bOutput = this.b[v];
        }
    }
})
$(function(){
    $('.toggle').find('a').click(function(){
        $('.menu').slideToggle();
    })

})