const poems = [
    {
        title:      'Hatem.',
        textde:     '<p>Nicht Gelegenheit macht Diebe,<br/>Sie ist selbst der größte Dieb;<br/>Denn sie stahl den Rest der Liebe,<br/>die mir noch im Herzen blieb.</p><p>Dir hat sie ihn übergeben,<br/>Meines Herzens Wohlgewinn,<br/>Daß ich nun, verarmt, mein Leben<br/>Nun von dir gewärtig bin.</p><p>Doch ich fühle schon Erbarmen<br/>Im Karfunkel deines Blicks<br/>Und erfreu\' in deinen Armen<br/>Mich erneuerten Geschicks.</p>',
        author:     'Johann Wolfgang von Goethe',
        death:      '(† ca. 1832 n. Chr. / 1247 d. H.)',
        autlink:    'https://en.wikipedia.org/wiki/Johann_Wolfgang_von_Goethe',
        source:     'West-östlicher Diwan | Suleika Nameh'
    }, 
    {
        title:      'rubāʿīy 7',
        textor:     '<div class="qasida"><div class="sadr">هر روز دلم بـه زیر باری دگر اسـت</div><div class="ajuz">در دیده من ز هجر خاری دگر اسـت</div><div class="sadr">مـن جـهد همی‌کنم قضا می‌گوید</div><div class="ajuz">بیرون ز کـفایت تو کاری دگراسـت</div></div>', 
        textde:     '<p>Täglich sinkt mir eine Bürde anderer Art auf\'s Herz,<br/>Schaft ein anderer Dorn der Trennung meinem Auge Schmerz;</p><p>Ich bemühe mich beständig, doch das Schicksal spricht:<br/>"Anderes gibt es noch, zu welchem dir die Kraft gebricht"</p>',
        author:     'Ḫwāǧe Šams ad-Dīn Moḥammad Ḥāfeẓ-e Šīrāzī',
        death:      '(† ca. 1390 n. Chr. / 792 d. H.)',
        autlink:    'https://en.wikipedia.org/wiki/Hafez',
        source:     'Dīwāne Ḥāfeẓ'
    },
    {
        title:      'rubāʿīy 25',
        textor:     '<div class="qasida"><div class="sadr">ای دوست دل از جفای دشمن درکش</div><div class="ajuz">با روی نکو شراب روشـن درکـش</div><div class="sadr">با اهـل هنر گوی گریبان بگـشای</div><div class="ajuz">وز نااهـلان تـمام دامـن درکـش</div></div>', 
        textde:     '<p>Behandle, Freund, nicht grausam deinen Feind;<br/>Trink\' lauteren Wein und sei vergnügt dabei;</p><p>Den Kunstliebenden gib deinen Kragen Preis<br/>Doch von den Schurken mach\' den Saum dir frei.</p>',
        author:     'Ḫwāǧe Šams ad-Dīn Moḥammad Ḥāfeẓ-e Šīrāzī',
        death:      '(† ca. 1390 n. Chr. / 792 d. H.)',
        autlink:    'https://en.wikipedia.org/wiki/Hafez',
        source:     'Dīwāne Ḥāfeẓ'    
    },
    {
        title:      'rubāʿīy 33',
        textor:     '<div class="qasida"><div class="sadr">ای شرمزده غنچه مـسـتور از تو</div><div class="ajuz">حیران و خجل نرگس مخـمور از تو</div><div class="sadr">گـل با تو برابری کـجا یارد کرد</div><div class="ajuz">کو نور ز مـه دارد و مـه نور از تو</div></div>', 
        textde:     '<p>Du, vor dem die keusche Knospe sich errötend neigt<br/>Und die trunkene Narzisse Scham und Staunen zeig!</p><p>Kann mit dir doch selbst die Rose sich vergleichen nicht,<br/>Denn sie borget von dem Monde, er von dir das Licht.</p>',
        author:     'Ḫwāǧe Šams ad-Dīn Moḥammad Ḥāfeẓ-e Šīrāzī',
        death:      '(† ca. 1390 n. Chr. / 792 d. H.)',
        autlink:    'https://en.wikipedia.org/wiki/Hafez',
        source:     'Dīwāne Ḥāfeẓ'
    },
    /*
    {
        title:      'ʾUmayma',
        textor:     '<div class="qasida"><div class="sadr"></div><div class="ajuz"></div><div class="sadr"></div><div class="ajuz"></div><div class="sadr"></div><div class="ajuz"></div></div>', 
        textde:     '<p>Oh dass ich wissen könnte, was nun ʾUmayma denkt,<br/>Und ob sie die Gedanken noch auf den Fernen lenkt!</p><p>Ob zwischen uns geschlungen besteht treu das Band<br/>Der Liebe, oder Glauben sie falschen Reden schenkt!</p><p>Nun, wenn du Jahresfristen von ihr enfernet bleist,<br/>Dann wirst du wohl erfahren, was freut dich oder kränkt.</p><p><br/></p>',
        author:     'ʾImruʾ l-Qays Ḥuǧr ibn al-Ḥāriṯ al-Kindī',
        death:      '(† ca. 550 n. Chr. / 74 v. d. H.)',
        autlink:    'https://de.wikipedia.org/wiki/Imru%27_al-Qais',
        source:     'Dīwān II., 5-7 (Übersetzung nach Friedrich Rückert)'
    },
    {
        title:      'Māwīya',
        textor:     '<div class="qasida"><div class="sadr"></div><div class="ajuz"></div><div class="sadr"></div><div class="ajuz"></div><div class="sadr"></div><div class="ajuz"></div></div>', 
        textde:     '<p>Oh Māwīya, gwährst du nach nächt\'gem Ritte Rast?<br/>Sprich, oder ob beschlossen du unsre Trennung hast,</p><p>Damit ich ganz verzweifle! ja deutlich rede du,<br/>Und vom verworrnen Zweifeln gibt mir die Trennung Ruh.</p>',
        author:     'ʾImrū al-Qays Ḥuǧr ibn al-Ḥāriṯ al-Kindī',
        death:      '(† ca. 550 n. Chr. / 74 v. d. H.)',
        autlink:    'https://de.wikipedia.org/wiki/Imru%27_al-Qais',
        source:     'Dīwān XI., 1-2 (Übersetzung nach Friedrich Rückert)'
    },
    {
        title:      'An Hind bint ʾImraʾ l-Qays (Tochter des Dichters)',
        textor:     '<div class="qasida"><div class="sadr"></div><div class="ajuz"></div><div class="sadr"></div><div class="ajuz"></div><div class="sadr"></div><div class="ajuz"></div></div>', 
        textde:     '<p>Weh, Hind, o Weh und Schade! So mußten uns entweichen<br/>Die Leut\', an denen Rache wir hofften zu erreichen.</p><p>Ihr gutes Glück beschirmte sie hinter ihren Vettern,<br/>Und Unglücksel\'ge wurden getroffen von den Wettern.</p><p>Der Meuterei entgangen ist Ilba mit Gekeuche;<br/>Wo sie erreicht ihn hätte, so wurden leer die Schläuche.</p>',
        author:     'ʾImruʾ al-Qays Ḥuǧr ibn al-Ḥāriṯ al-Kindī',
        death:      '(† ca. 550 n. Chr. / 74 v. d. H.)',
        autlink:    'https://de.wikipedia.org/wiki/Imru%27_al-Qais',
        source:     'Dīwān XXII. (Übersetzung nach Friedrich Rückert)'
    },    
    */
    {
        title:      'Gedicht 28',
        textor:     '<div class="qasida"><div class="sadr">هذا وَرُبَّ مُسَوَّفينَ صَبَحْتُهُم</div><div class="ajuz">مِنْ خَمْرِ بابِلَ لَذَّةً لِلشَّارِبِ</div><div class="sadr">بَكَرُوا عَلَيَّ بسَحْرَةٍ فصَبَحْتُهُم</div><div class="ajuz">بأِنَاءِ ذي كَرْمٍ كَقَعْبِ الحالِبِ</div><div class="sadr">بِزُجاجَةٍ مِلْءِ اليَدَيْنِ كأَنَّها</div><div class="ajuz">قِنْديلُ فُصْحٍ في كَنيسَةِ راهِبِ</div></div>', 
        textde:     '<p>Diesem und manch andr\'em Durstigen habe ich als Morgentrunk<br/>einen, dem trinkenden wohlschmeckenden Wein ausgeschenkt.</p><p>Sie kamen früh im letzten Drittel der Nacht zu mir, worauf ich<br/>mit einem Weinbehälter, der einer Milchkanne glich, den Trunk ausschenkte</p><p>Ein Behälter aus Glas, der beide Hände füllend<br/>einer Osterlampe in einer frommen Kirche glich.</p>',
        author:     'ʿAdī ibn Zayd al-ʿIbādī',
        death:      '(† ca. 600 n. Chr. / 22 v. d. H.)',
        autlink:    'https://en.wikipedia.org/wiki/Adi_ibn_Zayd',
        source:     'Dīwān ʿAdī ibn Zayd (Übersetzung Dominik Oesterle)'
    },
    {
        title:      'Gedicht 1 (1-7)',
        textor:     '<div class="qasida"><div class="sadr">لِمَنْ لَيلٌ بِذي جُشُمٍ طَويلُ</div><div class="ajuz">لِمَنْ قَدْ شَفَّهُ هَمٌّ دَخيلُ</div><div class="sadr">وما ظُلْمُ امرىءٍ؟ في الجِيدِ غُلٌّ</div><div class="ajuz">وفي السّاقَينِ ذو حَلَقٍ طَويلُ</div><div class="sadr">أَلا هَبَلَتْكَ أُمُّكَ {عَمرُو} بَعْدي</div><div class="ajuz">أَتقعُدُ لا أٌفَكُّ ولا تَصولُ</div><div class="sadr">أَلَمْ يَحْزَنْكَ أَنَّ أَباكَ عانٍ</div><div class="ajuz">وَأنتَ مُغَيَّبٌ غالَثْكَ غُولُ</div><div class="sadr">تُغَنِّيكَ (الجَرادَةُ) وَسْطَ جِسْرٍ</div><div class="ajuz">وَفي كَلْبٍ وتَصْحَبُكَ الشَّمولُ</div><div class="sadr">فلز كنتَ الأسيرَ ولَمْ أكُنْهُ</div><div class="ajuz">إذَا عَلِمَتْ مَعدُّ ما أقولُ</div><div class="sadr">لَما قَصَّرْتُ عن طَلَبِ المَعالي</div><div class="ajuz">فَتَقْصُرُنِي المَنيَّةُ أو تَطُولُ</div></div>', 
        textde:     '<p>Für wen ist die Nacht lang und furchterregend? Um eines Gefangenen willen,<br/>weil ein innerer Kummer ihn bedrückt</p><p>Was ist das Verbrechen eines Mannes, der eine lange Kette<br/>um seinen Hals und Fesseln an seinen Beinen trägt?</p><p>Deine Mutter, o ʿAmr, mag dir nach meinem Tod geraubt werden.<br/>Sitzt du still oder springst du auf, weil ich nicht freigelassen werde?</p><p>Betrübt es dich nicht, dass dein Vater gefangen ist<br/>während du dich abseits hältst? Mögen die Ġūle mit dir fliehen!</p><p>Die Tochter von al-Qeyn ibn Jasr singt zu dir, und<br/>Wein ist dein Gefährte in deinem Wahnsinn.</p><p>Wärst du der Gefangene - mögest du nicht so sein!<br/>dann würde ganz Maʿadd wissen, was ich sage.</p><p>Wenn ich falle, dann habe ich meinem Volk Wohltaten verliehen<br/>Wohltaten, die alle gut und gerecht sind;</p><p>Und ich habe nicht gezögert im Kampf für edle Taten<br/>ob das Schicksal des Todes mich bald ereilt, oder ob ich lange warten muss.</p>',
        author:     'ʿAdī ibn Zayd al-ʿIbādī',
        death:      '(† ca. 600 n. Chr. / 22 v. d. H.)',
        autlink:    'https://en.wikipedia.org/wiki/Adi_ibn_Zayd',
        source:     'Dīwān ʿAdī ibn Zayd (Übersetzung nach Josef Horovitz)'
    },
    {
        title:      'Gedicht 101',
        textor:     '<div class="qasida"><div class="sadr">أَحَسِبْتَ مَجْلِسِـنا وحُسْـ</div><div class="ajuz">ـنَ حَديـثِنا يُودي بِمالِكْ</div><div class="sadr">فَالمالُ وَالأَهْلونَ مَصْرَ</div><div class="ajuz">عَةٌ لِأمْرِكَ أو نَكَـالِكْ</div><div class="sadr">ما تَأْمُــرَنْ فينـا فَأَمْـ</div><div class="ajuz">ـرُكَ في يَمينِكَ أو شَمالِكْ</div></div>', 
        textde:     '<p>Glaubst du, dass die Gesellschaft mit uns und die Schicklichkeit<br/>der Konversation deine Besitztümer zerstören würden?</p><p>Besitztümer und Menschen sind ein Schlachtfeld<br/>für deine Herrschaft oder für deine Züchtigung</p><p>Was auch immer du in Bezug auf uns anordnest,<br/>die Anordnung liegt in deiner Rechten oder in deiner Linken.</p>',
        author:     'ʿAdī ibn Zayd al-ʿIbādī',
        death:      '(† ca. 600 n. Chr. / 22 v. d. H.)',
        autlink:    'https://en.wikipedia.org/wiki/Adi_ibn_Zayd',
        source:     'Dīwān ʿAdī ibn Zayd (Übersetzung nach Josef Horovitz)'
    },
    {
        title:      'Gedicht 113',
        textor:     '<div class="qasida"><div class="sadr">نادَمْتُ في الدَّيْر بني عَلْقَما</div><div class="ajuz">عاطَيْتُهُمْ مَشْمُولَةً عِنْدَما</div><div class="sadr">كَأَنَّ رِيحَ المِسْكِ في كأْسِها</div><div class="ajuz">إذا مَزَجْناها بِماء السَّما</div><div class="sadr">عَلْقَمُ ما بالُكَ لَمْ تَأْتِنَا</div><div class="ajuz">أَمَا اشْتَهَيْتَ اليَومَ أَنَّ تَنْعَما</div><div class="sadr">مَنْ سَرَّهُ العَيشُ ولَذَّاتُهُ</div><div class="ajuz">فَلْيَجْعَلِ الرَّاحَ لَهٌ سُلَّما</div></div>',
        textde:     '<p>Immer wenn ich im Kloster der Banū ʿAlqamā zeche,<br/>und ich ihnen gekühlten Wein einschenke,</p><p>ist es als ob ein Geruch von Moschus in ihrem Becher ist,<br/>wenn wir den Wein mit Regenwasser mischen.</p><p>ʿAlqamu, was meinst du? Du bist nicht zu uns getreten.<br/>Dürstet es dich heute nicht, zu genießen?</p><p>Wen Leben und Vergnügen glücklich machen,<br/>dem verschaft der Wein eine Leiter.</p>',
        author:     'ʿAdī ibn Zayd al-ʿIbādī',
        death:      '(† ca. 600 n. Chr. / 22 v. d. H.)',
        autlink:    'https://en.wikipedia.org/wiki/Adi_ibn_Zayd',
        source:     'Dīwān ʿAdī ibn Zayd (Übersetzung Dominik Oesterle)'
    },
];

export default poems;