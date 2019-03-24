﻿/* readings.*.js contains a single-string
character set: var szJi, and a linear
array containing on'yomi and kun'yomi: var k[]. database rule:
szJi.substring(i,i+1) => k[i] */

var k=[
'a, ',
'ai,aware',
'ai, ',
'ai, ',
'ai, ',
'aku,warui',
'aku,nigiru',
'atsu, ',
' ,atsukau',
' ,ateru',
' ,arashi',
'an,yasui',
'an, ',
'an,kurai',
'i, ',
'i,koromo',
'i,kurai',
'i,kakomu',
'i, ',
'i, ',
'i,yudaneru',
'i, ',
'i, ',
'i,osoreru',
'i, ',
'i, ',
'i,koto',
'i,utsuru',
'i,naeru',
'i,erai',
'i, ',
'i, ',
'i, ',
'i,chigau',
'i, ',
'i,nagusameru',
'i, ',
'i, ',
'iki, ',
'iku,sodatsu',
'ichi,hito',
'ichi, ',
'itsu, ',
' ,ibara',
' ,imo',
'in,hiku',
'in,shirushi',
'in,yoru',
'in, ',
'in, ',
'in, ',
'in, ',
'in,midara',
'in,kage',
'in,nomu',
'in,kakusu',
'in, ',
'u,migi',
'u, ',
'u,ha',
'u,ame',
' ,uta',
'utsu, ',
' ,une',
' ,ura',
'un,hakobu',
'un,kumo',
'ei,nagai',
'ei,oyogu',
'ei, ',
'ei,utsuru',
'ei,sakaeru',
'ei,itonamu',
'ei,yomu',
'ei,kage',
'ei,surudoi',
'ei, ',
'eki,yasashii',
'eki, ',
'eki, ',
'eki, ',
'eki, ',
'etsu, ',
'etsu,kosu',
'etsu, ',
'etsu, ',
'en,marui',
'en,nobiru',
'en,sou',
'en,honoo',
'en, ',
'en, ',
'en, ',
'en, ',
'en,sono',
'en,kemuru',
'en,saru',
'en,tooi',
'en,namari',
'en,shio',
'en, ',
'en,fuchi',
'en,tsuya',
'o,kegasu',
'ou, ',
'ou, ',
'ou, ',
'ou,kotaeru',
'ou, ',
'ou,osu',
'ou, ',
'ou, ',
'ou,naguru',
'ou,sakura',
'ou, ',
'ou,oku',
'ou,yoko',
' ,oka',
'oku,ya',
'oku, ',
'oku, ',
'oku, ',
' ,osore',
'otsu, ',
' ,ore',
' ,orosu',
'on,oto',
'on, ',
'on,atataka',
'on,odayaka',
'ka,shita',
'ka,bakeru',
'ka,hi',
'ka,kuwaeru',
'ka, ',
'ka,kari',
'ka,nani',
'ka,hana',
'ka, ',
'ka,atai',
'ka,hatasu',
'ka,kawa',
'ka, ',
'ka, ',
'ka,kakeru',
'ka,natsu',
'ka,ie',
'ka,ni',
'ka,hana',
'ka, ',
'ka, ',
'ka,uzu',
'ka,sugiru',
'ka,yome',
'ka,hima',
'ka, ',
'ka,kutsu',
'ka, ',
'ka,uta',
'ka, ',
'ka,kasegu',
'ka, ',
' ,ka',
'ga,kiba',
'ga,kawara',
'ga,ware',
'ga, ',
'ga,me',
'ga, ',
'ga, ',
'ga, ',
'kai, ',
'kai,mawaru',
'kai,hai',
'kai,au',
'kai,kokoroyoi',
'kai,imashimeru',
'kai,aratameru',
'kai,ayashii',
'kai, ',
'kai,kuiru',
'kai,umi',
'kai, ',
'kai,mina',
'kai, ',
'kai, ',
'kai,hiraku',
'kai, ',
'kai,katamari',
'kai, ',
'kai,toku',
'kai,tsubusu',
'kai,kowasu',
'kai,futokoro',
'kai, ',
' ,kai',
'gai,soto',
'gai, ',
'gai, ',
'gai,gake',
'gai, ',
'gai,machi',
'gai, ',
'gai,futa',
'gai, ',
'gai, ',
'gai, ',
' ,kaki',
' ,kaki',
'kaku,onoono',
'kaku,kado',
'kaku, ',
'kaku,kawa',
'kaku, ',
'kaku, ',
'kaku,kara',
'kaku, ',
'kaku,oboeru',
'kaku, ',
'kaku,hedateru',
'kaku, ',
'kaku,tashika',
'kaku,eru',
'kaku, ',
'kaku, ',
'gaku,manabu',
'gaku,take',
'gaku,tanoshii',
'gaku,hitai',
'gaku,ago',
' ,kakeru',
' ,kata',
'katsu, ',
'katsu, ',
'katsu, ',
'katsu,kawaku',
'katsu,waru',
'katsu,kuzu',
'katsu,suberu',
'katsu, ',
'katsu, ',
' ,katsu',
' ,kabu',
' ,kama',
' ,kama',
' ,karu',
'kan,hosu',
'kan, ',
'kan,amai',
'kan,ase',
'kan, ',
'kan, ',
'kan,kimo',
'kan, ',
'kan,kanmuri',
'kan,maku',
'kan, ',
'kan,ochiiru',
'kan,kawaku',
'kan, ',
'kan,wazurau',
'kan,tsuranuku',
'kan,samui',
'kan, ',
'kan,taeru',
'kan,kaeru',
'kan, ',
'kan, ',
'kan, ',
'kan,aida',
'kan, ',
'kan,susumeru',
'kan, ',
'kan,miki',
'kan, ',
'kan, ',
'kan,nareru',
'kan,kuda',
'kan,seki',
'kan, ',
'kan, ',
'kan,yurui',
'kan, ',
'kan, ',
'kan,yakata',
'kan, ',
'kan, ',
'kan, ',
'kan, ',
'kan, ',
'kan,kangamiru',
'gan,maru',
'gan,fukumu',
'gan,kishi',
'gan,iwa',
'gan, ',
'gan,manako',
'gan, ',
'gan,kao',
'gan,negau',
'ki,kuwadateru',
'ki, ',
'ki,abunai',
'ki,tsukue',
'ki, ',
'ki, ',
'ki, ',
'ki,imu',
'ki, ',
'ki, ',
'ki,inoru',
'ki, ',
'ki, ',
'ki, ',
'ki,sudeni',
'ki,shirusu',
'ki,okiru',
'ki,ueru',
'ki,oni',
'ki,kaeru',
'ki,moto',
'ki,yoru',
'ki, ',
'ki,kame',
'ki,yorokobu',
'ki,iku',
'ki, ',
'ki, ',
'ki, ',
'ki,tattoi',
'ki, ',
'ki, ',
'ki,hata',
'ki,utsuwa',
'ki, ',
'ki,kagayaku',
'ki,hata',
'ki, ',
'gi,waza',
'gi, ',
'gi,itsuwaru',
'gi,azamuku',
'gi, ',
'gi,utagau',
'gi, ',
'gi,tawamureru',
'gi, ',
'gi, ',
'gi, ',
'kiku, ',
'kichi, ',
'kitsu, ',
'kitsu,tsumeru',
'kyaku, ',
'kyaku, ',
'kyaku,ashi',
'gyaku,saka',
'gyaku,shiitageru',
'kyuu,kokono',
'kyuu,hisashii',
'kyuu,oyobu',
'kyuu,yumi',
'kyuu,oka',
'kyuu, ',
'kyuu,yasumu',
'kyuu,suu',
'kyuu,kuchiru',
'kyuu,usu',
'kyuu,motomeru',
'kyuu,kiwameru',
'kyuu,naku',
'kyuu,isogu',
'kyuu, ',
'kyuu, ',
'kyuu,miya',
'kyuu,sukuu',
'kyuu,tama',
'kyuu, ',
'kyuu,kagu',
'kyuu,kiwameru',
'gyuu,ushi',
'kyo,saru',
'kyo, ',
'kyo,iru',
'kyo,kobamu',
'kyo, ',
'kyo,ageru',
'kyo, ',
'kyo,yurusu',
'kyo, ',
'gyo,uo',
'gyo,on',
'gyo, ',
'kyou, ',
'kyou,tomo',
'kyou,sakebu',
'kyou,kuruu',
'kyou, ',
'kyou, ',
'kyou,sonaeru',
'kyou, ',
'kyou, ',
'kyou, ',
'kyou,hasamu',
'kyou,semai',
'kyou,osoreru',
'kyou,uyauyashii',
'kyou,mune',
'kyou,obiyakasu',
'kyou,tsuyoi',
'kyou,oshieru',
'kyou, ',
'kyou,sakai',
'kyou,hashi',
'kyou,tameru',
'kyou,kagami',
'kyou,kisou',
'kyou,hibiku',
'kyou,odoroku',
'gyou,aogu',
'gyou,akatsuki',
'gyou,waza',
'gyou,koru',
'kyoku,magaru',
'kyoku, ',
'kyoku,kiwameru',
'gyoku,tama',
'kin, ',
'kin, ',
'kin, ',
'kin,chikai',
'kin,kane',
'kin, ',
'kin,tsutomeru',
'kin,koto',
'kin,suji',
'kin,wazuka',
'kin, ',
'kin, ',
'kin,nishiki',
'kin,tsutsushimu',
'kin,eri',
'gin, ',
'gin, ',
'ku, ',
'ku, ',
'ku,kurushii',
'ku,kakeru',
'gu, ',
'gu, ',
'gu,oroka',
'kuu,sora',
'guu, ',
'guu, ',
'guu,sumi',
' ,kushi',
'kutsu, ',
'kutsu,horu',
'kutsu, ',
' ,kuma',
' ,kuru',
'kun,kimi',
'kun, ',
'kun, ',
'kun,kaoru',
'gun, ',
'gun, ',
'gun,mureru',
'kei,ani',
'kei, ',
'kei,kata',
'kei, ',
'kei, ',
'kei,kuki',
'kei,kakaru',
'kei,kata',
'kei,chigiru',
'kei,hakaru',
'kei,megumu',
'kei, ',
'kei,kakageru',
'kei, ',
'kei,heru',
'kei,hotaru',
'kei,uyamau',
'kei, ',
'kei,karui',
'kei,katamuku',
'kei,tazusaeru',
'kei,tsugu',
'kei,mouderu',
'kei, ',
'kei, ',
'kei, ',
'kei,ikoi',
'kei, ',
'kei,niwatori',
'gei, ',
'gei,mukaeru',
'gei,kujira',
'geki,suki',
'geki, ',
'geki,utsu',
'geki,hageshii',
' ,keta',
'ketsu,kakeru',
'ketsu,ana',
'ketsu,chi',
'ketsu,kimeru',
'ketsu,musubu',
'ketsu, ',
'ketsu,isagiyoi',
'getsu,tsuki',
'ken,inu',
'ken, ',
'ken,miru',
'ken, ',
'ken,kata',
'ken,tateru',
'ken,togu',
'ken, ',
'ken, ',
'ken,kaneru',
'ken,tsurugi',
'ken,kobushi',
'ken,noki',
'ken,sukoyaka',
'ken,kewashii',
'ken, ',
'ken,katai',
'ken, ',
'ken,kirau',
'ken, ',
'ken,kinu',
'ken,tsukau',
'ken, ',
'ken, ',
'ken,kashikoi',
'ken, ',
'ken,kagi',
'ken,mayu',
'ken, ',
'ken, ',
'ken,kakeru',
'gen,moto',
'gen,maboroshi',
'gen, ',
'gen,iu',
'gen,tsuru',
'gen,kagiru',
'gen,hara',
'gen,arawareru',
'gen, ',
'gen,heru',
'gen,minamoto',
'gen,ogosoka',
'ko,onore',
'ko,to',
'ko,furui',
'ko,yobu',
'ko,katameru',
'ko,mata',
'ko,tora',
'ko, ',
'ko, ',
'ko,yue',
'ko,kareru',
'ko, ',
'ko, ',
'ko,mizuumi',
'ko,yatou',
'ko,hokoru',
'ko,tsuzumi',
'ko, ',
'ko,kaerimiru',
'go,itsu',
'go,tagai',
'go, ',
'go, ',
'go,nochi',
'go, ',
'go,satoru',
'go, ',
'go,kataru',
'go,ayamaru',
'go, ',
'kou,kuchi',
'kou, ',
'kou,ooyake',
'kou, ',
'kou, ',
'kou, ',
'kou,takumi',
'kou,hiroi',
'kou, ',
'kou,majiwaru',
'kou,hikaru',
'kou,muku',
'kou, ',
'kou,konomu',
'kou,e',
'kou,kangaeru',
'kou,iku',
'kou, ',
'kou, ',
'kou, ',
'kou,semeru',
'kou,sara',
'kou,kiku',
'kou,saiwai',
'kou, ',
'kou, ',
'kou, ',
'kou,atsui',
'kou, ',
'kou, ',
'kou, ',
'kou,beni',
'kou,arai',
'kou, ',
'kou,ka',
'kou,sourou',
'kou, ',
'kou,tagayasu',
'kou, ',
'kou,mitsugu',
'kou,oriru',
'kou,takai',
'kou, ',
'kou,hikaeru',
'kou, ',
'kou,ki',
'kou,nodo',
'kou,awateru',
'kou,minato',
'kou,katai',
'kou,shiboru',
'kou, ',
'kou,mizo',
'kou, ',
'kou,kamaeru',
'kou,tsuna',
'kou, ',
'kou, ',
'kou,okoru',
'kou, ',
'kou,hagane',
'kou, ',
'kou, ',
' ,kou',
'gou, ',
'gou,au',
'gou, ',
'gou, ',
'gou, ',
'gou, ',
'koku, ',
'koku,tsugeru',
'koku,tani',
'koku,kizamu',
'koku,kuni',
'koku,kuro',
'koku, ',
'koku, ',
'goku, ',
'kotsu,hone',
' ,koma',
' ,komu',
' ,koro',
'kon,ima',
'kon,komaru',
'kon, ',
'kon,uramu',
'kon,ne',
'kon, ',
'kon,majiru',
'kon,ato',
'kon, ',
'kon,tamashii',
'kon, ',
'kon,nengoro',
'sa,hidari',
'sa, ',
'sa, ',
'sa, ',
'sa,suna',
'sa,sosonokasu',
'sa,sasu',
'sa, ',
'sa,kusari',
'za,suwaru',
'za, ',
'sai, ',
'sai,futatabi',
'sai,wazawai',
'sai,tsuma',
'sai, ',
'sai,kudaku',
'sai, ',
'sai, ',
'sai,irodoru',
'sai,toru',
'sai,sumu',
'sai,matsuru',
'sai, ',
'sai,hosoi',
'sai,na',
'sai,mottomo',
'sai,tatsu',
'sai, ',
'sai,moyoosu',
'sai,fusagu',
'sai, ',
'sai,noseru',
'sai,kiwa',
' ,sai',
'zai,aru',
'zai, ',
'zai, ',
'zai, ',
'zai,tsumi',
' ,saki',
'saku,tsukuru',
'saku,kezuru',
'saku, ',
'saku, ',
'saku, ',
'saku, ',
'saku,su',
'saku,shiboru',
'saku, ',
' ,saku',
'satsu, ',
'satsu,fuda',
'satsu,suru',
'satsu, ',
'satsu, ',
'satsu,korosu',
'satsu, ',
'satsu,toru',
'satsu,suru',
'zatsu, ',
' ,sara',
'san,mi',
'san,yama',
'san,mairu',
'san, ',
'san,kaiko',
'san,mijime',
'san,umu',
'san,kasa',
'san,chiru',
'san, ',
'san,sui',
'san, ',
'zan,nokoru',
'zan,kiru',
'zan, ',
'shi, ',
'shi,ko',
'shi,sasaeru',
'shi,tomaru',
'shi,uji',
'shi,tsukaeru',
'shi, ',
'shi, ',
'shi,yo',
'shi,ichi',
'shi,ya',
'shi,mune',
'shi,shinu',
'shi,ito',
'shi,itaru',
'shi,ukagau',
'shi,kokorozasu',
'shi,watakushi',
'shi,tsukau',
'shi,sasu',
'shi,hajimeru',
'shi,ane',
'shi,eda',
'shi, ',
'shi, ',
'shi,sugata',
'shi,omou',
'shi,yubi',
'shi,hodokosu',
'shi, ',
'shi, ',
'shi,kami',
'shi,abura',
'shi, ',
'shi,murasaki',
'shi, ',
'shi,ha',
'shi, ',
'shi,kokoromiru',
'shi, ',
'shi, ',
'shi,kau',
'shi, ',
'shi,me',
'shi, ',
'shi,tamawaru',
'shi,hakaru',
'ji,shimesu',
'ji,aza',
'ji,tera',
'ji,tsugu',
'ji,mimi',
'ji,mizukara',
'ji,niru',
'ji, ',
'ji,koto',
'ji,samurai',
'ji,osameru',
'ji,motsu',
'ji,toki',
'ji, ',
'ji,itsukushimu',
'ji,yameru',
'ji, ',
'ji,esa',
'ji, ',
' ,shika',
'shiki, ',
'shiki, ',
'jiku, ',
'shichi,nana',
'shitsu,shikaru',
'shitsu,ushinau',
'shitsu,muro',
'shitsu, ',
'shitsu,toru',
'shitsu,shimeru',
'shitsu, ',
'shitsu,urushi',
'shitsu, ',
'jitsu,mi',
' ,shiba',
'sha,utsusu',
'sha,yashiro',
'sha,kuruma',
'sha, ',
'sha,mono',
'sha,iru',
'sha,suteru',
'sha, ',
'sha,naname',
'sha,niru',
'sha,saegiru',
'sha,ayamaru',
'ja, ',
'ja,hebi',
'shaku, ',
'shaku,kariru',
'shaku,kumu',
'shaku, ',
'shaku, ',
'jaku,wakai',
'jaku,yowai',
'jaku,sabi',
'shu,te',
'shu,nushi',
'shu,mamoru',
'shu, ',
'shu,toru',
'shu,karu',
'shu,kubi',
'shu,koto',
'shu, ',
'shu,sake',
'shu,hareru',
'shu,tane',
'shu,omomuki',
'ju,kotobuki',
'ju,ukeru',
'ju,norou',
'ju,sazukeru',
'ju, ',
'ju, ',
'ju, ',
'shuu,osameru',
'shuu, ',
'shuu,su',
'shuu,fune',
'shuu,hiideru',
'shuu,mawari',
'shuu, ',
'shuu,hirou',
'shuu,aki',
'shuu,kusai',
'shuu,osameru',
'shuu,sode',
'shuu,owaru',
'shuu, ',
'shuu,narau',
'shuu, ',
'shuu,tsuku',
'shuu, ',
'shuu,atsumaru',
'shuu,ureeru',
'shuu, ',
'shuu,minikui',
'shuu,keru',
'shuu,osou',
'juu,too',
'juu,shiru',
'juu,ateru',
'juu,sumu',
'juu,yawaraka',
'juu,e',
'juu,shitagau',
'juu,shibu',
'juu, ',
'juu,kemono',
'juu,tate',
'shuku, ',
'shuku,iwau',
'shuku,yado',
'shuku, ',
'shuku, ',
'shuku,chijimu',
'juku, ',
'juku,ureru',
'shutsu,deru',
'jutsu,noberu',
'jutsu, ',
'shun, ',
'shun,haru',
'shun,matataku',
'jun, ',
'jun,meguru',
'jun,tate',
'jun, ',
'jun, ',
'jun, ',
'jun, ',
'jun, ',
'jun, ',
'jun,uruou',
'jun, ',
'sho, ',
'sho,hajime',
'sho,tokoro',
'sho,kaku',
'sho, ',
'sho,atsui',
'sho, ',
'sho,o',
'sho, ',
'jo,onna',
'jo, ',
'jo,tasukeru',
'jo, ',
'jo, ',
'jo, ',
'jo,nozoku',
'shou,chiisai',
'shou,masu',
'shou,sukunai',
'shou,mesu',
'shou, ',
'shou,toko',
'shou, ',
'shou, ',
'shou, ',
'shou,maneku',
'shou,uketamawaru',
'shou,noboru',
'shou,matsu',
'shou,numa',
'shou, ',
'shou,yoi',
'shou, ',
'shou,kieru',
'shou, ',
'shou, ',
'shou, ',
'shou,warau',
'shou,tonaeru',
'shou,akinau',
'shou, ',
'shou, ',
'shou, ',
'shou, ',
'shou,katsu',
'shou, ',
'shou, ',
'shou,yaku',
'shou,kogeru',
'shou, ',
'shou, ',
'shou,mikotonori',
'shou, ',
'shou, ',
'shou,kizu',
'shou, ',
'shou,teru',
'shou,kuwashii',
'shou, ',
'shou,sawaru',
'shou,akogareru',
'shou, ',
'shou, ',
'shou,tsugunau',
'shou, ',
'shou,kane',
'jou,ue',
'jou,take',
'jou, ',
'jou, ',
'jou, ',
'jou,noru',
'jou,shiro',
'jou, ',
'jou, ',
'jou,tsune',
'jou,nasake',
'jou,ba',
'jou,tatamu',
'jou,musu',
'jou,nawa',
'jou, ',
'jou, ',
'jou, ',
'jou,yuzuru',
'jou,kamosu',
'shoku,iro',
'shoku,fuku',
'shoku,kuu',
'shoku,ueru',
'shoku,fueru',
'shoku,kazaru',
'shoku,fureru',
'shoku, ',
'shoku,oru',
'shoku, ',
'joku,hazukashimeru',
' ,shiri',
'shin,kokoro',
'shin,mousu',
'shin,nobiru',
'shin, ',
'shin, ',
'shin,mi',
'shin,karai',
'shin,okasu',
'shin, ',
'shin,tsu',
'shin,kami',
'shin,kuchibiru',
'shin, ',
'shin,furu',
'shin,hitasu',
'shin,ma',
'shin,hari',
'shin,fukai',
'shin, ',
'shin,susumu',
'shin,mori',
'shin,miru',
'shin,neru',
'shin,tsutsushimu',
'shin,atarashii',
'shin, ',
'shin,furuu',
'shin,takigi',
'shin,oya',
'jin,hito',
'jin,ha',
'jin, ',
'jin,tsukusu',
'jin, ',
'jin,hanahada',
'jin, ',
'jin,tazuneru',
'jin, ',
'su, ',
'zu,hakaru',
'sui,mizu',
'sui,fuku',
'sui,tareru',
'sui,taku',
'sui, ',
'sui,iki',
'sui,otoroeru',
'sui,osu',
'sui,you',
'sui,togeru',
'sui, ',
'sui,ho',
'zui, ',
'zui, ',
'suu, ',
'suu, ',
'suu,kazu',
' ,sueru',
' ,sugi',
' ,suso',
'sun, ',
' ,se',
'ze, ',
'sei,i',
'sei,yo',
'sei,tadashii',
'sei,ikiru',
'sei,naru',
'sei,nishi',
'sei,koe',
'sei, ',
'sei, ',
'sei, ',
'sei, ',
'sei,ao',
'sei, ',
'sei,matsurigoto',
'sei,hoshi',
'sei, ',
'sei,kaerimiru',
'sei, ',
'sei,yuku',
'sei,kiyoi',
'sei,moru',
'sei,muko',
'sei,hareru',
'sei,ikioi',
'sei, ',
'sei,makoto',
'sei, ',
'sei, ',
'sei,chikau',
'sei,shizu',
'sei,kou',
'sei,totonoeru',
'sei, ',
'zei, ',
'seki,yuu',
'seki, ',
'seki,ishi',
'seki,aka',
'seki,mukashi',
'seki, ',
'seki, ',
'seki, ',
'seki, ',
'seki,oshii',
'seki, ',
'seki,semeru',
'seki,ato',
'seki,tsumu',
'seki, ',
'seki, ',
'setsu,kiru',
'setsu,oru',
'setsu,tsutanai',
'setsu, ',
'setsu,tsugu',
'setsu,moukeru',
'setsu,yuki',
'setsu, ',
'setsu,fushi',
'setsu,toku',
'zetsu,shita',
'zetsu,taeru',
'sen,chi',
'sen,kawa',
'sen, ',
'sen,shimeru',
'sen,saki',
'sen, ',
'sen,moppara',
'sen,izumi',
'sen,asai',
'sen,arau',
'sen,someru',
'sen,ougi',
'sen, ',
'sen, ',
'sen,fune',
'sen,ikusa',
'sen,iru',
'sen,urayamu',
'sen, ',
'sen, ',
'sen, ',
'sen, ',
'sen,zeni',
'sen,hisomu',
'sen, ',
'sen, ',
'sen,erabu',
'sen,susumeru',
'sen, ',
'sen,azayaka',
'zen,mattaku',
'zen,mae',
'zen,yoi',
'zen, ',
'zen, ',
'zen, ',
'zen, ',
'zen,tsukurou',
'so,nerau',
'so,habamu',
'so, ',
'so, ',
'so, ',
'so, ',
'so,arai',
'so,kumu',
'so,utoi',
'so,uttaeru',
'so, ',
'so,sakanoboru',
'so,ishizue',
'sou,futa',
'sou, ',
'sou,hayai',
'sou,arasou',
'sou,hashiru',
'sou,kanaderu',
'sou,ai',
'sou, ',
'sou,kusa',
'sou,okuru',
'sou,kura',
'sou,sagasu',
'sou,sasu',
'sou,kuwa',
'sou,su',
'sou,haku',
'sou, ',
'sou, ',
'sou,sawayaka',
'sou,mado',
'sou,tsukuru',
'sou,mo',
'sou,yaseru',
'sou,houmuru',
'sou,yosoou',
'sou, ',
'sou, ',
'sou, ',
'sou, ',
'sou,au',
'sou, ',
'sou, ',
'sou,misao',
'sou, ',
'sou,shimo',
'sou,sawagu',
'sou,mo',
'zou,tsukuru',
'zou, ',
'zou,masu',
'zou,nikumu',
'zou,kura',
'zou,okuru',
'zou, ',
'soku, ',
'soku,taba',
'soku,ashi',
'soku,unagasu',
'soku, ',
'soku,iki',
'soku,toraeru',
'soku,hayai',
'soku,gawa',
'soku,hakaru',
'zoku, ',
'zoku, ',
'zoku, ',
'zoku, ',
'zoku,tsuzuku',
'sotsu, ',
'sotsu,hikiiru',
'son, ',
'son,mura',
'son,mago',
'son,tattoi',
'son,sokonau',
'son, ',
'ta,hoka',
'ta,ooi',
'ta, ',
'da,utsu',
'da, ',
'da,tsuba',
'da, ',
'da, ',
'da, ',
'tai,futoi',
'tai, ',
'tai,karada',
'tai,taeru',
'tai,matsu',
'tai,okotaru',
'tai, ',
'tai,shirizoku',
'tai,obiru',
'tai, ',
'tai, ',
'tai,fukuro',
'tai, ',
'tai,kaeru',
'tai,kasu',
'tai, ',
'tai,todokooru',
'tai, ',
'tai, ',
'dai,oo',
'dai,kawaru',
'dai, ',
'dai, ',
'dai, ',
' ,taki',
'taku, ',
'taku, ',
'taku,sawa',
'taku, ',
'taku, ',
'taku, ',
'taku, ',
'daku, ',
'daku,nigoru',
' ,tadashi',
'tatsu, ',
'datsu,nugu',
'datsu,ubau',
' ,tana',
' ,dare',
'tan, ',
'tan, ',
'tan,katsugu',
'tan, ',
'tan,sumi',
'tan, ',
'tan,saguru',
'tan,awai',
'tan,mijikai',
'tan,nageku',
'tan,hashi',
'tan,hokorobiru',
'tan, ',
'tan,kitaeru',
'dan, ',
'dan,otoko',
'dan, ',
'dan,tatsu',
'dan,hiku',
'dan,atataka',
'dan, ',
'dan, ',
'chi, ',
'chi,ike',
'chi,shiru',
'chi,ne',
'chi,hajiru',
'chi,itasu',
'chi,okureru',
'chi, ',
'chi, ',
'chi,oku',
'chi, ',
'chiku,take',
'chiku, ',
'chiku, ',
'chiku,takuwaeru',
'chiku,kizuku',
'chitsu, ',
'chitsu, ',
'cha, ',
'chaku,kiru',
'chaku, ',
'chuu,naka',
'chuu,naka',
'chuu,mushi',
'chuu,oki',
'chuu, ',
'chuu, ',
'chuu, ',
'chuu,sosogu',
'chuu,hiru',
'chuu,hashira',
'chuu, ',
'chuu, ',
'chuu,iru',
'chuu, ',
'cho,arawasu',
'cho, ',
'chou, ',
'chou,tomurau',
'chou, ',
'chou,kizasu',
'chou,machi',
'chou,nagai',
'chou,idomu',
'chou, ',
'chou,haru',
'chou,horu',
'chou,nagameru',
'chou,tsuru',
'chou,itadaku',
'chou,tori',
'chou,asa',
'chou,haru',
'chou,koeru',
'chou, ',
'chou,haneru',
'chou, ',
'chou,azakeru',
'chou,shio',
'chou,sumu',
'chou,shiraberu',
'chou,kiku',
'chou,koriru',
'choku,tadachini',
'choku, ',
'choku, ',
'chin,shizumu',
'chin,mezurashii',
'chin, ',
'chin, ',
'chin, ',
'chin,shizumeru',
'tsui,ou',
'tsui, ',
'tsui, ',
'tsuu,tooru',
'tsuu,itai',
' ,tsuka',
' ,tsukeru',
' ,tsubo',
' ,tsume',
' ,tsuru',
'tei,hikui',
'tei, ',
'tei, ',
'tei,otouto',
'tei,sadameru',
'tei,soko',
'tei, ',
'tei, ',
'tei, ',
'tei, ',
'tei, ',
'tei, ',
'tei,niwa',
'tei, ',
'tei, ',
'tei, ',
'tei,tsutsumi',
'tei,sageru',
'tei,hodo',
'tei, ',
'tei,shimaru',
'tei,akirameru',
'dei,doro',
'teki,mato',
'teki,fue',
'teki,tsumu',
'teki,shizuku',
'teki, ',
'teki,kataki',
'deki,oboreru',
'tetsu, ',
'tetsu, ',
'tetsu, ',
'tetsu, ',
'tetsu, ',
'ten,ame',
'ten, ',
'ten,mise',
'ten, ',
'ten, ',
'ten,soeru',
'ten,korogaru',
'ten, ',
'den,ta',
'den,tsutawaru',
'den,tono',
'den, ',
'to, ',
'to,haku',
'to,netamu',
'to, ',
'to, ',
'to,miyako',
'to,wataru',
'to,nuru',
'to,kakeru',
'do,tsuchi',
'do, ',
'do,tsutomeru',
'do,tabi',
'do,ikaru',
'tou,katana',
'tou,fuyu',
'tou,hi',
'tou,ataru',
'tou,nageru',
'tou,mame',
'tou,higashi',
'tou, ',
'tou,nigeru',
'tou,taoreru',
'tou,kooru',
'tou,kara',
'tou,shima',
'tou,momo',
'tou,utsu',
'tou,suku',
'tou, ',
'tou,itamu',
'tou,nusumu',
'tou, ',
'tou, ',
'tou, ',
'tou,mune',
'tou,yu',
'tou, ',
'tou,noboru',
'tou,kotaeru',
'tou,hitoshii',
'tou,tsutsu',
'tou,suberu',
'tou,ine',
'tou,fumu',
'tou, ',
'tou,atama',
'tou, ',
'tou,fuji',
'tou,tatakau',
'tou, ',
'dou,onaji',
'dou,hora',
'dou, ',
'dou,ugoku',
'dou, ',
'dou,warabe',
'dou,michi',
'dou,hataraku',
'dou, ',
'dou,michibiku',
'dou,hitomi',
' ,touge',
'toku, ',
'toku, ',
'toku,eru',
'toku, ',
'toku, ',
'toku, ',
'doku, ',
'doku,hitori',
'doku,yomu',
' ,tochi',
'totsu, ',
'totsu,tsuku',
' ,todokeru',
'ton, ',
'ton,buta',
'ton, ',
'don,musaboru',
'don,nibui',
'don,kumoru',
' ,donburi',
'na, ',
'na, ',
'nai,uchi',
' ,nashi',
' ,nazo',
' ,nabe',
'nan,minami',
'nan,yawaraka',
'nan,katai',
'ni,futa',
'ni,ama',
'ni, ',
' ,niou',
'niku, ',
' ,niji',
'nichi,hi',
'nyuu,iru',
'nyuu,chichi',
'nyou, ',
'nin,makaseru',
'nin, ',
'nin,shinobu',
'nin,mitomeru',
'nei, ',
'netsu,atsui',
'nen,toshi',
'nen, ',
'nen, ',
'nen,nebaru',
'nen,moeru',
'nou,nayamu',
'nou,osameru',
'nou, ',
'nou, ',
'nou, ',
'nou,koi',
'ha, ',
'ha,nami',
'ha, ',
'ha,yaburu',
'ha, ',
'ba,uma',
'ba, ',
'ba,nonoshiru',
'hai,ogamu',
'hai,sakazuki',
'hai,se',
'hai, ',
'hai, ',
'hai,kubaru',
'hai, ',
'hai,yabureru',
'hai,sutareru',
'hai, ',
'bai,uru',
'bai, ',
'bai,ume',
'bai,tsuchikau',
'bai, ',
'bai, ',
'bai,kau',
'bai, ',
'haku,shiro',
'haku, ',
'haku, ',
'haku,tomaru',
'haku,semaru',
'haku,hagasu',
'haku, ',
'haku, ',
'haku,usui',
'baku,mugi',
'baku, ',
'baku,shibaru',
'baku, ',
' ,hako',
' ,hashi',
' ,hata',
' ,hada',
'hachi,ya',
'hachi, ',
'hatsu, ',
'hatsu,kami',
'batsu, ',
'batsu,nuku',
'batsu, ',
'batsu, ',
'han,soru',
'han,nakaba',
'han, ',
'han,okasu',
'han,ho',
'han, ',
'han,tomonau',
'han, ',
'han,saka',
'han, ',
'han,ita',
'han, ',
'han, ',
'han, ',
'han, ',
'han, ',
'han, ',
'han,meshi',
'han, ',
'han,wazurau',
'han, ',
'han, ',
'han, ',
'han, ',
'ban, ',
'ban, ',
'ban, ',
'ban, ',
'hi,kuraberu',
'hi,kawa',
'hi, ',
'hi,ina',
'hi, ',
'hi,kare',
'hi, ',
'hi,koeru',
'hi, ',
'hi,iyashii',
'hi,tobu',
'hi,tsukareru',
'hi,himeru',
'hi,koumuru',
'hi,kanashii',
'hi,tobira',
'hi,tsuiyasu',
'hi, ',
'hi, ',
'hi,sakeru',
'bi,o',
'bi,mayu',
'bi,utsukushii',
'bi,sonaeru',
'bi, ',
'bi,hana',
' ,hiza',
' ,hiji',
'hitsu,hiki',
'hitsu,kanarazu',
'hitsu, ',
'hitsu,fude',
' ,hime',
'hyaku, ',
'hyou,koori',
'hyou,omote',
'hyou,tawara',
'hyou, ',
'hyou, ',
'hyou,tadayou',
'hyou, ',
'byou,nae',
'byou, ',
'byou,yamu',
'byou,egaku',
'byou,neko',
'hin,shina',
'hin,hama',
'hin,mazushii',
'hin, ',
'hin, ',
'bin, ',
'bin, ',
'fu, ',
'fu,otto',
'fu,chichi',
'fu,tsukeru',
'fu,nuno',
'fu, ',
'fu, ',
'fu,kowai',
'fu, ',
'fu, ',
'fu, ',
'fu,makeru',
'fu,omomuku',
'fu,uku',
'fu, ',
'fu, ',
'fu,tomu',
'fu, ',
'fu,kusaru',
'fu,shiku',
'fu, ',
'fu, ',
'fu, ',
'bu,anadoru',
'bu, ',
'bu, ',
'bu,mau',
'fuu, ',
'fuu,kaze',
'fuku,fuseru',
'fuku, ',
'fuku, ',
'fuku,haba',
'fuku, ',
'fuku, ',
'fuku,hara',
'fuku, ',
'fuku,oou',
'futsu,harau',
'futsu,waku',
'butsu,hotoke',
'butsu,mono',
'fun,ko',
'fun,magireru',
'fun, ',
'fun,fuku',
'fun, ',
'fun,ikidooru',
'fun,furuu',
'bun,wakeru',
'bun,fumi',
'bun,kiku',
'hei, ',
'hei,taira',
'hei, ',
'hei,awaseru',
'hei,nami',
'hei,gara',
'hei, ',
'hei,tojiru',
'hei, ',
'hei, ',
'hei, ',
'hei, ',
'hei,mochi',
'bei,kome',
'heki,kabe',
'heki, ',
'heki,kuse',
'betsu,wakareru',
'betsu,sagesumu',
'hen,kata',
'hen,atari',
'hen,kaesu',
'hen,kawaru',
'hen,katayoru',
'hen, ',
'hen,amu',
'ben, ',
'ben,tayori',
'ben, ',
'ho,aruku',
'ho,tamotsu',
'ho, ',
'ho,toraeru',
'ho,oginau',
'ho, ',
'bo,haha',
'bo,tsunoru',
'bo,haka',
'bo,shitau',
'bo,kureru',
'bo, ',
'hou,kata',
'hou,tsutsumu',
'hou,kanbashii',
'hou, ',
'hou,tatematsuru',
'hou,takara',
'hou,daku',
'hou,hanasu',
'hou, ',
'hou,awa',
'hou, ',
'hou, ',
'hou,narau',
'hou,mine',
'hou, ',
'hou,kuzureru',
'hou,otozureru',
'hou,mukuiru',
'hou,hachi',
'hou,yutaka',
'hou,akiru',
'hou,homeru',
'hou,nuu',
'bou,nai',
'bou,toboshii',
'bou,isogashii',
'bou, ',
'bou,samatageru',
'bou,wasureru',
'bou,fusegu',
'bou,fusa',
'bou, ',
'bou, ',
'bou,okasu',
'bou, ',
'bou,tsumugu',
'bou,nozomu',
'bou,katawara',
'bou, ',
'bou, ',
'bou, ',
'bou, ',
'bou,abaku',
'bou,fukuramu',
'bou,hakaru',
' ,hoo',
'hoku,kita',
'boku,ki',
'boku, ',
'boku,maki',
'boku, ',
'boku, ',
'boku,sumi',
'boku, ',
'botsu, ',
'botsu, ',
' ,hori',
'hon,moto',
'hon, ',
'hon,hirugaeru',
'bon, ',
'bon, ',
'ma,asa',
'ma, ',
'ma,migaku',
'ma, ',
'mai, ',
'mai,imouto',
'mai, ',
'mai, ',
'mai,umeru',
'maku, ',
'maku, ',
' ,makura',
' ,mata',
'matsu,sue',
'matsu, ',
'man, ',
'man,michiru',
'man, ',
'man, ',
'mi, ',
'mi,aji',
'mi, ',
' ,misaki',
'mitsu, ',
'mitsu, ',
'myaku, ',
'myou, ',
'min,tami',
'min,nemuru',
'mu,hoko',
'mu,tsutomeru',
'mu,nai',
'mu,yume',
'mu,kiri',
' ,musume',
'mei,na',
'mei,inochi',
'mei,akari',
'mei,mayou',
'mei, ',
'mei, ',
'mei, ',
'mei,naku',
'metsu,horobiru',
'men,manukareru',
'men,omo',
'men,wata',
'men, ',
'mo,shigeru',
'mo, ',
'mou,ke',
'mou, ',
'mou, ',
'mou, ',
'mou, ',
'mou,ami',
'moku,me',
'moku,damaru',
'mon,kado',
'mon, ',
'mon,tou',
'ya, ',
'ya,yo',
'ya,no',
' ,ya',
'yaku, ',
'yaku, ',
'yaku, ',
'yaku,wake',
'yaku,kusuri',
'yaku,odoru',
' ,yami',
'yu,yoshi',
'yu,abura',
'yu, ',
'yu, ',
'yu,satosu',
'yu, ',
'yu,ieru',
'yui, ',
'yuu,tomo',
'yuu,aru',
'yuu,isamu',
'yuu, ',
'yuu, ',
'yuu, ',
'yuu,waku',
'yuu, ',
'yuu, ',
'yuu,asobu',
'yuu,o',
'yuu,sasou',
'yuu,ureeru',
'yuu, ',
'yuu,yasashii',
'yo,ataeru',
'yo, ',
'yo,amaru',
'yo,homare',
'yo,azukeru',
'you,osanai',
'you,mochiiru',
'you,hitsuji',
'you,ayashii',
'you, ',
'you,kaname',
'you, ',
'you, ',
'you,ageru',
'you,yureru',
'you,ha',
'you, ',
'you,tokeru',
'you,koshi',
'you,sama',
'you, ',
'you,odoru',
'you,kama',
'you,yashinau',
'you, ',
'you,utai',
'you, ',
'yoku,osaeru',
'yoku, ',
'yoku,abiru',
'yoku,hossuru',
'yoku, ',
'yoku,tsubasa',
'ra, ',
'ra,hadaka',
'ra, ',
'rai,kuru',
'rai,kaminari',
'rai,tanomu',
'raku,karamu',
'raku,ochiru',
'raku, ',
'ratsu, ',
'ran,midareru',
'ran,tamago',
'ran, ',
'ran, ',
'ran,ai',
'ran, ',
'ri, ',
'ri,kiku',
'ri,sato',
'ri, ',
'ri, ',
'ri,ura',
'ri,haku',
'ri, ',
'ri,hanareru',
'riku, ',
'ritsu,tatsu',
'ritsu, ',
'ritsu, ',
'ryaku, ',
'ryuu,yanagi',
'ryuu,nagareru',
'ryuu,tomeru',
'ryuu,tatsu',
'ryuu,tsubu',
'ryuu, ',
'ryuu, ',
'ryo, ',
'ryo,tabi',
'ryo, ',
'ryo, ',
'ryou, ',
'ryou, ',
'ryou,yoi',
'ryou, ',
'ryou,suzushii',
'ryou, ',
'ryou,misasagi',
'ryou,hakaru',
'ryou, ',
'ryou, ',
'ryou, ',
'ryou, ',
'ryou, ',
'ryou,kate',
'ryoku,chikara',
'ryoku,midori',
'rin,hayashi',
'rin, ',
'rin, ',
'rin,wa',
'rin,tonaru',
'rin,nozomu',
'ru, ',
'rui,namida',
'rui, ',
'rui, ',
'rui,tagui',
'rei, ',
'rei, ',
'rei,tsumetai',
'rei,hagemu',
'rei,modosu',
'rei,tatoeru',
'rei,suzu',
'rei, ',
'rei,tama',
'rei, ',
'rei, ',
'rei,uruwashii',
'reki,koyomi',
'reki, ',
'retsu, ',
'retsu,otoru',
'retsu, ',
'retsu,saku',
'ren,kou',
'ren,tsuranaru',
'ren, ',
'ren,neru',
'ren, ',
'ro, ',
'ro, ',
'ro, ',
'ro,ji',
'ro,tsuyu',
'rou,oiru',
'rou, ',
'rou,moteasobu',
'rou, ',
'rou,hogaraka',
'rou, ',
'rou, ',
'rou, ',
'rou,moru',
'rou,kago',
'roku,mu',
'roku, ',
'roku,fumoto',
'ron, ',
'wa,yawaragu',
'wa,hanasu',
'wai,makanau',
' ,waki',
'waku,madou',
' ,waku',
'wan, ',
'go, '
];

