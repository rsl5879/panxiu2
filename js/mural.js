// 按分类获取图片列表
function getImagesByCategory(category) {
    const imageData = {
        '1太阳花': [
            '第1页-2八瓣太阳花_CocoAI_20250614_181105_9.png',
            '第2页-2七瓣太阳花_CocoAI_20250614_181105_11.png',
            '第3页-1八瓣太阳花_CocoAI_20250614_181105_4.png',
            '第4页-1八瓣太阳花_CocoAI_20250614_181105_5.png',
            '第5页-1七瓣太阳花_CocoAI_20250614_181105_6.png',
            '第5页-2八瓣太阳花_CocoAI_20250614_181105_7.png',
            '第10页-1七瓣太阳花_CocoAI_20250614_181105_14.png',
            '第11页-1八瓣太阳花_CocoAI_20250614_181105_16.png',
            '第11页-2七瓣太阳花_CocoAI_20250614_181105_15.png',
            '第13页-1七瓣太阳花_CocoAI_20250614_181105_17.png',
            '第15页-1八瓣太阳花_CocoAI_20250614_181105_13.png',
            '第33页-1混合太阳花_CocoAI_20250614_181105_8.png',
            '第33页-1混合太阳花(2)_CocoAI_20250614_181105_10.png',
            '第66页-1混合太阳花_CocoAI_20250614_181105_1.png',
            '第66页-1混合太阳花(1)_CocoAI_20250614_181105_3.png',
            '第66页-1混合太阳花(2)_CocoAI_20250614_181105_2.png',
            '第67页-1混合太阳花_CocoAI_20250614_180843_17.jpg',
            '第67页-1混合太阳花(1)_CocoAI_20250614_180843_20.jpg',
            '第68页-1混合太阳花_CocoAI_20250614_180843_18.jpg',
            '第68页-2混合太阳花_CocoAI_20250614_180843_19.jpg',
            '第69页-1混合太阳花_CocoAI_20250614_180843_13.jpg',
            '第69页-1混合太阳花(1)_CocoAI_20250614_180843_16.jpg',
            '第69页-1混合太阳花(2)_CocoAI_20250614_180843_15.jpg',
            '第69页-1混合太阳花(3)_CocoAI_20250614_180843_14.jpg',
            '第69页-2混合太阳花_CocoAI_20250614_180843_8.jpg',
            '第69页-2混合太阳花(1)_CocoAI_20250614_180843_12.jpg',
            '第69页-2混合太阳花(2)_CocoAI_20250614_180843_11.jpg',
            '第70页-1八瓣太阳花_CocoAI_20250614_180843_9.jpg',
            '第71页-1混合太阳花_CocoAI_20250614_180843_10.jpg',
            '第74页-1混合太阳花_CocoAI_20250614_180843_5.jpg',
            '第74页-1混合太阳花(1)_CocoAI_20250614_180843_7.jpg',
            '第74页-1混合太阳花(2)_CocoAI_20250614_180843_6.jpg',
            '第76页-1混合太阳花_CocoAI_20250614_180843_1.jpg',
            '第76页-1混合太阳花(1)_CocoAI_20250614_180843_4.jpg',
            '第76页-1混合太阳花(2)_CocoAI_20250614_180843_3.jpg',
            '第76页-1混合太阳花(3)_CocoAI_20250614_180843_2.jpg',
            '太阳花2_CocoAI_20250614_181514_9.png',
            '太阳花3(1)_CocoAI_20250614_181316_17.png',
            '太阳花4(2)_CocoAI_20250614_181316_10.png',
            '太阳花5(1)_CocoAI_20250614_181316_9.png',
            '太阳花5(2)_CocoAI_20250614_181316_8.png',
            '太阳花6(1)_CocoAI_20250614_181316_7.png',
            '太阳花6(2)_CocoAI_20250614_181316_2.png',
            '太阳花7(1)_CocoAI_20250614_181316_3.png',
            '太阳花7(2)_CocoAI_20250614_181316_1.png',
            '太阳花8(1)_CocoAI_20250614_181105_20.png',
            '太阳花8(2)_CocoAI_20250614_181105_19.png',
            '太阳花8(3)_CocoAI_20250614_181105_18.png',
            '太阳花9_CocoAI_20250614_181105_12.png',
            '太阳花14_CocoAI_20250614_181514_20.png',
            '太阳花15(1)_CocoAI_20250614_181514_17.png',
            '太阳花15(2)_CocoAI_20250614_181514_18.png',
            '太阳花16(1)_CocoAI_20250614_181514_16.png',
            '太阳花16(2)_CocoAI_20250614_181514_15.png',
            '太阳花17_CocoAI_20250614_181514_13.png',
            '太阳花17(1)_CocoAI_20250614_181514_14.png',
            '太阳花18_CocoAI_20250614_181514_19.png',
            '太阳花19_CocoAI_20250614_181514_11.png',
            '太阳花19(1)_CocoAI_20250614_181514_12.png',
            '太阳花20_CocoAI_20250614_181514_7.png',
            '太阳花20(1)_CocoAI_20250614_181514_8.png',
            '太阳花21(1)_CocoAI_20250614_181514_6.png',
            '太阳花22_CocoAI_20250614_181514_10.png',
            '太阳花23(1)_CocoAI_20250614_181514_4.png',
            '太阳花25_CocoAI_20250614_181514_2.png',
            '太阳花25(1)_CocoAI_20250614_181514_5.png',
            '太阳花26_CocoAI_20250614_181514_3.png',
            '太阳花27_CocoAI_20250614_181514_1.png',
            '太阳花28_CocoAI_20250614_181316_19.png',
            '太阳花28(1)_CocoAI_20250614_181316_20.png',
            '太阳花29(1)_CocoAI_20250614_181316_18.png',
            '太阳花30(1)_CocoAI_20250614_181316_16.png',
            '太阳花30(2)_CocoAI_20250614_181316_15.png',
            '太阳花31(1)_CocoAI_20250614_181316_14.png',
            '太阳花32_CocoAI_20250614_181316_11.png',
            '太阳花32(1)_CocoAI_20250614_181316_13.png',
            '太阳花32(2)_CocoAI_20250614_181316_12.png',
            '太阳花33_CocoAI_20250614_181316_4.png',
            '太阳花33(1)_CocoAI_20250614_181316_6.png',
            '太阳花33(2)_CocoAI_20250614_181316_5.png'
        ],
        '2组合图案': [
            '第73页-1混合太阳花_CocoAI_20250614_182030_1.jpg',
            '富贵不断头 莲花 太阳花 祥云纹_CocoAI_20250614_182334_3.jpg',
            '富贵不断头 神仙魁子 太阳花_CocoAI_20250614_182334_1.jpg',
            '富贵不断头 太阳花(1)_CocoAI_20250614_182334_7.jpg',
            '富贵不断头 太阳花(2)_CocoAI_20250614_182030_20.jpg',
            '富贵不断头 祥云纹 太阳花 太极 吉祥八宝_CocoAI_20250614_182334_2.jpg',
            '汉子 祥云纹 神仙魁子_CocoAI_20250614_182030_18.jpg',
            '汉子团富贵不断头 祥云纹_CocoAI_20250614_182030_19.jpg',
            '莲花 太阳花 太极_CocoAI_20250614_182030_2.jpg',
            '莲花 祥云纹 太阳花 富贵不断头_CocoAI_20250614_182030_3.jpg',
            '盘绣大包腰带_CocoAI_20250614_182030_14.jpg',
            '盘绣动物图案_CocoAI_20250614_182030_17.jpg',
            '神仙魁子 太极 太阳花 祥云纹_CocoAI_20250614_182030_15.jpg',
            '神仙魁子 太阳花(1)_CocoAI_20250614_182030_16.jpg',
            '神仙魁子 太阳花(2)_CocoAI_20250614_182030_11.jpg',
            '神仙魁子 祥云纹 太极_CocoAI_20250614_182030_13.jpg',
            '太极 富贵不断头 太阳花 (2)_CocoAI_20250614_182334_20.jpg',
            '太极 太阳花 祥云纹 富贵不断头_CocoAI_20250614_182334_19.jpg',
            '太阳花 富贵不断头 太极_CocoAI_20250614_182334_15.jpg',
            '太阳花 太极 汉子(2)_CocoAI_20250614_182334_17.jpg',
            '太阳花 太极 祥云纹 富贵不断头_CocoAI_20250614_182334_16.jpg',
            '太阳花 祥云纹 富贵不断头(1)_CocoAI_20250614_182334_18.jpg',
            '太阳花 祥云纹 富贵不断头(2)_CocoAI_20250614_182334_11.jpg',
            '太阳花 祥云纹(1)_CocoAI_20250614_182334_14.jpg',
            '太阳花 祥云纹(2)_CocoAI_20250614_182334_13.jpg',
            '太阳花 祥云纹(3)_CocoAI_20250614_182334_12.jpg',
            '太阳花 祥云纹(4)_CocoAI_20250614_182334_8.jpg',
            '太阳花 祥云纹(5)_CocoAI_20250614_182334_9.jpg',
            '太阳花 祥云纹(6)_CocoAI_20250614_182334_10.jpg',
            '太阳花 祥云纹(7)_CocoAI_20250614_182334_4.jpg',
            '太阳花 祥云纹(8)_CocoAI_20250614_182334_6.jpg',
            '祥云纹 富贵不断头 太阳花 神仙魁子_CocoAI_20250614_182030_4.jpg',
            '祥云纹 汉子 太阳花(1)_CocoAI_20250614_182030_5.jpg',
            '祥云纹 汉子 太阳花(2)_CocoAI_20250614_182030_6.jpg',
            '祥云纹 太阳花 神仙魁子 太极(1)_CocoAI_20250614_182030_10.jpg',
            '祥云纹 太阳花 神仙魁子 太极(2)_CocoAI_20250614_182030_9.jpg',
            '祥云纹 太阳花 太极(1)_CocoAI_20250614_182030_12.jpg',
            '祥云纹 太阳花 太极(2)_CocoAI_20250614_182030_7.jpg',
            '祥云纹 太阳花 太极(3)_CocoAI_20250614_182030_8.jpg',
            '宗教图案三鱼太极太阳花图和祥云纹_CocoAI_20250614_182334_5.jpg'
        ],
        '3动物': [
            '动植物 (1)(1)_CocoAI_20250614_183220_1.jpg',
            '动植物 (10)(1)_CocoAI_20250614_183220_2.jpg',
            '动植物 (112)_CocoAI_20250614_183220_6.jpg',
            '动植物 (112)(1)_CocoAI_20250614_183220_3.jpg',
            '动植物 (113)_CocoAI_20250614_183220_4.jpg',
            '动植物 (113)(1)_CocoAI_20250614_183220_5.jpg',
            '动植物 (114)(1)_CocoAI_20250614_183220_7.jpg',
            '动植物 (125)(1)_CocoAI_20250614_183220_8.jpg',
            '动植物 (129)(1)_CocoAI_20250614_183220_9.jpg'
        ],
        '4动植物': [
            '动植物 (6)_CocoAI_20250614_184155_2.jpg',
            '动植物 (6)(1)_CocoAI_20250614_184155_3.jpg',
            '动植物 (11)_CocoAI_20250614_183954_18.jpg',
            '动植物 (11)(1)_CocoAI_20250614_183954_15.jpg',
            '动植物 (51)_CocoAI_20250614_184155_12.jpg',
            '动植物 (53)_CocoAI_20250614_184155_10.jpg',
            '动植物 (53)(1)_CocoAI_20250614_184155_11.jpg',
            '动植物 (54)_CocoAI_20250614_184155_8.jpg',
            '动植物 (54)(1)_CocoAI_20250614_184155_9.jpg',
            '动植物 (55)_CocoAI_20250614_184155_6.jpg',
            '动植物 (55)(1)_CocoAI_20250614_184155_7.jpg',
            '动植物 (57)(1)_CocoAI_20250614_184155_5.jpg',
            '动植物 (59)_CocoAI_20250614_184155_1.jpg',
            '动植物 (59)(1)_CocoAI_20250614_184155_4.jpg',
            '动植物 (63)(2)_CocoAI_20250614_184155_20.jpg',
            '动植物 (63)(3)_CocoAI_20250614_184155_19.jpg',
            '动植物 (64)(1)_CocoAI_20250614_184155_18.jpg',
            '动植物 (65)_CocoAI_20250614_184155_16.jpg',
            '动植物 (65)(1)_CocoAI_20250614_184155_17.jpg',
            '动植物 (66)(1)_CocoAI_20250614_184155_15.jpg',
            '动植物 (67)_CocoAI_20250614_184155_13.jpg',
            '动植物 (67)(1)_CocoAI_20250614_184155_14.jpg',
            '动植物 (100)_CocoAI_20250614_183954_2.jpg',
            '动植物 (100)(1)_CocoAI_20250614_183954_1.jpg',
            '动植物 (101)_CocoAI_20250614_183954_4.jpg',
            '动植物 (101)(1)_CocoAI_20250614_183954_5.jpg',
            '动植物 (102)_CocoAI_20250614_183954_6.jpg',
            '动植物 (102)(1)_CocoAI_20250614_183954_3.jpg',
            '动植物 (103)_CocoAI_20250614_183954_8.jpg',
            '动植物 (103)(1)_CocoAI_20250614_183954_7.jpg',
            '动植物 (104)_CocoAI_20250614_183954_10.jpg',
            '动植物 (104)(1)_CocoAI_20250614_183954_11.jpg',
            '动植物 (105)_CocoAI_20250614_183954_12.jpg',
            '动植物 (105)(1)_CocoAI_20250614_183954_9.jpg',
            '动植物 (106)(1)_CocoAI_20250614_183954_13.jpg',
            '动植物 (107)_CocoAI_20250614_183954_19.jpg',
            '动植物 (107)(1)_CocoAI_20250614_183954_14.jpg',
            '动植物 (107)(2)_CocoAI_20250614_183954_17.jpg',
            '动植物 (108)_CocoAI_20250614_183954_16.jpg',
            '动植物 (109)(1)_CocoAI_20250614_183954_20.jpg',
            '动植物151_CocoAI_20250614_183741_19.jpg',
            '动植物151(1)_CocoAI_20250614_183741_20.jpg',
            '动植物152_CocoAI_20250614_183741_17.jpg',
            '动植物152(1)_CocoAI_20250614_183741_18.jpg',
            '动植物153_CocoAI_20250614_183741_16.jpg',
            '动植物154_CocoAI_20250614_183741_13.jpg',
            '动植物155_CocoAI_20250614_183741_15.jpg',
            '动植物155(1)_CocoAI_20250614_183741_14.jpg',
            '动植物156_CocoAI_20250614_183741_12.jpg',
            '动植物157_CocoAI_20250614_183741_10.jpg',
            '动植物157(1)_CocoAI_20250614_183741_11.jpg',
            '动植物158_CocoAI_20250614_183741_9.jpg',
            '动植物159_CocoAI_20250614_183741_7.jpg',
            '动植物159(1)_CocoAI_20250614_183741_8.jpg',
            '动植物160_CocoAI_20250614_183741_5.jpg',
            '动植物160(1)_CocoAI_20250614_183741_6.jpg',
            '动植物161_CocoAI_20250614_183741_3.jpg',
            '动植物161(1)_CocoAI_20250614_183741_4.jpg',
            '动植物162_CocoAI_20250614_183741_1.jpg',
            '动植物162(1)_CocoAI_20250614_183741_2.jpg'
        ],
        '5神仙魁子-17': [
            '第16页-1神仙魁子_CocoAI_20250614_193148_14.jpg',
            '第16页-2吉祥八宝之吉祥结_CocoAI_20250614_193148_15.jpg',
            '第16页-3吉祥八宝之吉祥结_CocoAI_20250614_193148_16.jpg',
            '第20页-1神仙魁子_CocoAI_20250614_193148_9.jpg',
            '第20页-2神仙魁子_CocoAI_20250614_193148_8.jpg',
            '第21页-1神仙魁子_CocoAI_20250614_193148_7.jpg',
            '第28页-1神仙魁子_CocoAI_20250614_193148_10.jpg',
            '第30页-1神仙魁子_CocoAI_20250614_193148_2.jpg',
            '第30页-2神仙魁子_CocoAI_20250614_193148_3.jpg',
            '第75页-1神仙魁子_CocoAI_20250614_193148_5.jpg',
            '第75页-2神仙魁子_CocoAI_20250614_193148_4.jpg',
            '第75页-3神仙魁子_CocoAI_20250614_193148_6.jpg',
            '第75页-4神仙魁子_CocoAI_20250614_193148_1.jpg',
            '太极2_CocoAI_20250614_193148_17.jpg',
            '太阳花21_CocoAI_20250614_193148_13.jpg',
            '太阳花27(1)_CocoAI_20250614_193148_12.jpg',
            '太阳花31_CocoAI_20250614_193148_11.jpg'
        ],
        '6吉祥八宝-34': [
            '吉祥八宝 (26)_CocoAI_20250614_194302_18.jpg',
            '吉祥八宝 (27)_CocoAI_20250614_194302_17.jpg',
            '吉祥八宝 (28)_CocoAI_20250614_194302_16.jpg',
            '吉祥八宝 (30)_CocoAI_20250614_194302_20.jpg',
            '吉祥八宝 (31)_CocoAI_20250614_194302_19.jpg',
            '吉祥八宝 (32)_CocoAI_20250614_194302_15.jpg',
            '吉祥八宝 (33)_CocoAI_20250614_194302_14.jpg',
            '吉祥八宝 (34)_CocoAI_20250614_194302_13.jpg',
            '吉祥八宝 (35)_CocoAI_20250614_194302_12.jpg',
            '吉祥八宝 (36)_CocoAI_20250614_194302_11.jpg',
            '吉祥八宝 (37)_CocoAI_20250614_194302_10.jpg',
            '吉祥八宝 (38)_CocoAI_20250614_194302_9.jpg',
            '吉祥八宝 (39)_CocoAI_20250614_194302_6.jpg',
            '吉祥八宝 (40)_CocoAI_20250614_194302_5.jpg',
            '吉祥八宝 (41)_CocoAI_20250614_194302_4.jpg',
            '吉祥八宝 (42)_CocoAI_20250614_194302_3.jpg',
            '吉祥八宝 (43)_CocoAI_20250614_194302_2.jpg',
            '太阳花1(1)_CocoAI_20250614_194302_8.jpg',
            '太阳花2(1)_CocoAI_20250614_194302_7.jpg',
            '太阳花3(2)_CocoAI_20250614_194302_1.jpg'
        ],
        '7太极-23': [
            '第1页-1三鱼太极_CocoAI_20250614_194538_10.jpg',
            '第2页-1双鱼太极_CocoAI_20250614_194538_11.jpg',
            '第4页-2四鱼太极_CocoAI_20250614_194538_12.jpg',
            '第6页-1四鱼太极_CocoAI_20250614_194538_13.jpg',
            '第6页-2双鱼太极_CocoAI_20250614_194538_14.jpg',
            '第7页-1双鱼太极_CocoAI_20250614_194538_5.jpg',
            '第7页-2双鱼太极_CocoAI_20250614_194538_6.jpg',
            '第8页-1双鱼太极_CocoAI_20250614_194538_1.jpg',
            '第8页-2三鱼太极_CocoAI_20250614_194538_2.jpg',
            '第9页-1双鱼太极_CocoAI_20250614_194538_3.jpg',
            '第9页-2四鱼太极_CocoAI_20250614_194538_4.jpg',
            '第12页-1双鱼太极_CocoAI_20250614_194538_15.jpg',
            '第12页-2四鱼太极_CocoAI_20250614_194538_16.jpg',
            '第13页-2四鱼太极_CocoAI_20250614_194538_17.jpg',
            '第14页-1双鱼太极_CocoAI_20250614_194538_18.jpg',
            '第14页-2三鱼太极_CocoAI_20250614_194538_19.jpg',
            '第15页-2双鱼太极_CocoAI_20250614_194538_20.jpg',
            '第72页-1双鱼太极_CocoAI_20250614_194538_9.jpg',
            '第79页-1三鱼太极_CocoAI_20250614_194538_8.jpg',
            '第85页-2四鱼太极_CocoAI_20250614_194538_7.jpg'
        ],
        '8汉子图案-11': [
            '第19页-1汉子图案.PNG',
            '第55页-1汉子图案.PNG',
            '第68页-3汉子图案.PNG',
            '第82页-1汉子图案.PNG',
            '第84页-2.PNG',
            '第84页-3汉子图案.PNG',
            '第85页-1汉子图案.PNG',
            '第85页-3汉子图案.PNG',
            '汉子图案1.png',
            '汉子图案1(1).png',
            '汉子图案2.png'
        ],
        '9富贵不断头-5': [
            '第26页-1富贵不断头.PNG',
            '第31页-1富贵不断头.PNG',
            '第37页-1富贵不断头.PNG',
            '富贵不断头1.png',
            '富贵不断头2.png'
        ],
        '10祥云纹-23': [
            '祥云纹1.png',
            '祥云纹2.png',
            '祥云纹3.png',
            '祥云纹4.png',
            '祥云纹5.png',
            '祥云纹6.png',
            '祥云纹7.png',
            '祥云纹8.png',
            '祥云纹9.png',
            '祥云纹10.png',
            '祥云纹11.png',
            '祥云纹12.png',
            '祥云纹13.png',
            '祥云纹14.png',
            '祥云纹15.png',
            '祥云纹16.png',
            '祥云纹17.png',
            '祥云纹18.png'
        ],
        '12创新纹样': [
            '1.png',
            '1(3).png',
            '2(2).png',
            '2ce6cd637f63c2e19838c44c66834ebe_compress.jpg',
            '3(5).png',
            '7a8b6ab853b96f7ba93da78b85094257_origin.png',
            '12生肖终版.jpg',
            '0837baa644bc4e7b8dedf6538fe8b971_origin.png',
            '鹿(1).png',
            '鹿1(4).png',
            '鹿2.png',
            '鹿3.png',
            '小人终版.jpg',
            'b8cc4cf7786b7b647d8c642be81cdb1c_origin.png',
            'bdcffdc8df98dfdbbddc3f99c1fc8f54_compress.jpg',
            'IMG_20250522_183501.jpg',
            'IMG_20250522_183656.jpg',
            'IMG_20250522_184227.jpg',
            'IMG_20250522_184326.jpg'
        ],
        '13纹样模具-7': [
            '纹样模具1.png',
            '纹样模具2.png',
            '纹样模具3.png',
            '纹样模具4.png',
            '纹样模具5.png',
            '纹样模具6.png',
            '纹样模具7.png'
        ]
    };
    return imageData[category] || [];
}

function getImagesByCategory(category) {
    const imageData = {
        
    };
    return imageData[category] || [];
}


function loadCategory(category) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    
    if(category === 'all') {
        const categories = ['1太阳花', '2组合图案', '3动物', '4动植物', '5神仙魁子-17', 
                          '6吉祥八宝-34', '7太极-23', '8汉子图案-11', '9富贵不断头-5', 
                          '10祥云纹-23', '12创新纹样', '13纹样模具-7'];
        categories.forEach(cat => loadImagesForCategory(cat, gallery));
    } else {
        loadImagesForCategory(category, gallery);
    }
}


function loadImagesForCategory(category, gallery) {
    const images = getImagesByCategory(category);
    
    if(images.length === 0) {
        gallery.innerHTML = `<p class="no-items">暂无${category.replace(/\d+/g, '').replace(/-/g, '')}素材</p>`;
        return;
    }

  
    images.sort((a, b) => {
        const aVibrant = isVibrantImage(a);
        const bVibrant = isVibrantImage(b);
        if (aVibrant && !bVibrant) return -1;
        if (!aVibrant && bVibrant) return 1;
        if (a.endsWith('.jpg') && b.endsWith('.png')) return -1;
        if (a.endsWith('.png') && b.endsWith('.jpg')) return 1;
        return 0;
    });

    const container = document.createElement('div');
    container.className = 'gallery-container';
    
    images.forEach(img => {
        const item = document.createElement('div');
        item.className = 'item';
        const imgPath = `./${category}/${img}`;
        const description = generateDescription(category, img);
        const categoryName = category.replace(/\d+/g, '').replace(/-/g, '');

        item.innerHTML = `
            <div class="image-container">
                <img src="${imgPath}" alt="${description}" 
                     onerror="this.onerror=null;this.src='./images/default.jpg';this.alt='图片加载失败';this.style.opacity='0.7'"
                     loading="lazy">
            </div>
            <div class="item-info">
                <h3>${categoryName}</h3>
                <p>${description}</p>
            </div>
        `;
        container.appendChild(item);
    });
    
    gallery.appendChild(container);
}


window.onload = function() {
    loadCategory('all');
};
function getLocalImages() {
    const categories = ['1太阳花', '2组合图案', '3动物', '4动植物', '5神仙魁子-17', 
                      '6吉祥八宝-34', '7太极-23', '8汉子图案-11', '9富贵不断头-5', 
                      '10祥云纹-23', '12创新纹样', '13纹样模具-7'];
    
    let allImages = [];
    categories.forEach(category => {
        const images = getImagesByCategory(category);
        images.forEach(img => {
            allImages.push({
                id: Math.random().toString(36).substr(2, 9),
                title: img.split('_')[0] || img,
                category: category.replace(/\d+/g, '').replace(/-/g, ''),
                image: `./${category}/${img}`,
                views: Math.floor(Math.random() * 2000),
                date: new Date().toISOString().split('T')[0]
            });
        });
    });
    return allImages;
}

const mockData = getLocalImages();


function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        ruins_name: params.get('ruins_name') || '盘锦',
        mark_name: params.get('mark_name') || 'all',
        address_name: params.get('address_name') || 'all',
        currentpage: parseInt(params.get('currentpage')) || 1,
        searth_key: params.get('searth_key') || 'all',
        data_order: params.get('data_order') || 'all'
    };
}


function renderGallery(data) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="item-info">
                <h3>${item.title}</h3>
                <p>分类: ${getCategoryName(item.category)}</p>
                <p>浏览量: ${item.views}</p>
            </div>
        `;
        gallery.appendChild(itemElement);
    });
}


function getCategoryName(category) {
    const categories = {
        'nature': '自然风光',
        'culture': '文化传统',
        'history': '历史遗迹'
    };
    return categories[category] || '其他';
}


function renderPagination(currentPage, totalPages) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

   
    if (currentPage > 1) {
        const prevLink = document.createElement('a');
        prevLink.href = updatePageParam(currentPage - 1);
        prevLink.textContent = '上一页';
        pagination.appendChild(prevLink);
    }

    
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = updatePageParam(i);
        pageLink.textContent = i.toString();
        if (i === currentPage) {
            pageLink.className = 'active';
        }
        pagination.appendChild(pageLink);
    }

    
    if (currentPage < totalPages) {
        const nextLink = document.createElement('a');
        nextLink.href = updatePageParam(currentPage + 1);
        nextLink.textContent = '下一页';
        pagination.appendChild(nextLink);
    }
}


function updatePageParam(page) {
    const params = new URLSearchParams(window.location.search);
    params.set('currentpage', page);
    return `mural.html?${params.toString()}`;
}


function filterAndSortData(data, params) {
    let filteredData = [...data];

    
    if (params.searth_key && params.searth_key !== 'all') {
        filteredData = filteredData.filter(item => 
            item.title.includes(params.searth_key)
        );
    }

    
    if (params.mark_name && params.mark_name !== 'all') {
        filteredData = filteredData.filter(item => 
            item.category === params.mark_name
        );
    }

   
    if (params.data_order === 'newest') {
        filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (params.data_order === 'popular') {
        filteredData.sort((a, b) => b.views - a.views);
    }

    return filteredData;
}


function initPage() {
    const params = getUrlParams();
    
    
    if (params.searth_key && params.searth_key !== 'all') {
        document.getElementById('search-input').value = params.searth_key;
    }

   
    if (params.mark_name && params.mark_name !== 'all') {
        document.getElementById('category-filter').value = params.mark_name;
    }

    if (params.data_order && params.data_order !== 'all') {
        document.getElementById('sort-by').value = params.data_order;
    }

   
    const filteredData = filterAndSortData(mockData, params);
    
   
    const itemsPerPage = 6;
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (params.currentpage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    
    renderGallery(paginatedData);
    renderPagination(params.currentpage, totalPages);

    
    document.getElementById('search-btn').addEventListener('click', function() {
        const keyword = document.getElementById('search-input').value.trim();
        const params = new URLSearchParams(window.location.search);
        params.set('searth_key', keyword || 'all');
        params.set('currentpage', 1);
        window.location.href = `mural.html?${params.toString()}`;
    });

   
    document.getElementById('category-filter').addEventListener('change', function() {
        const category = this.value;
        const params = new URLSearchParams(window.location.search);
        params.set('mark_name', category);
        params.set('currentpage', 1);
        window.location.href = `mural.html?${params.toString()}`;
    });


    document.getElementById('sort-by').addEventListener('change', function() {
        const sortBy = this.value;
        const params = new URLSearchParams(window.location.search);
        params.set('data_order', sortBy);
        params.set('currentpage', 1);
        window.location.href = `mural.html?${params.toString()}`;
    });
}


document.addEventListener('DOMContentLoaded', initPage);
