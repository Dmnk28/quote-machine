const poems = [
    {
        title: 'Hatem.',
        text: '<p>Nicht Gelegenheit macht Diebe,<br/>Sie ist selbst der größte Dieb;<br/>Denn sie stahl den Rest der Liebe,<br/>die mir noch im Herzen blieb.</p><p>Dir hat sie ihn übergeben,<br/>Meines Herzens Wohlgewinn,<br/>Daß ich nun, verarmt, mein Leben<br/>Nun von dir gewärtig bin.</p><p>Doch ich fühle schon Erbarmen<br/>Im Karfunkel deines Blicks<br/>Und erfreu\' in deinen Armen<br/>Mich erneuerten Geschicks.</p>',
        author: 'Johann Wolfgang von Goethe',
        death: '(† ca. 1832 n. Chr. / 1247 d. H.)',
        autlink: 'https://en.wikipedia.org/wiki/Johann_Wolfgang_von_Goethe',
        source: 'West-östlicher Diwan | Suleika Nameh'
    }, 
    {
        title: 'rubāʿīy 7',
        text: '<p>Täglich sinkt mir eine Bürde anderer Art auf\'s Herz,<br/>Schaft ein anderer Dorn der Trennung meinem Auge Schmerz;</p><p>Ich bemühe mich beständig, doch das Schicksal spricht:<br/>"Anderes gibt es noch, zu welchem dir die Kraft gebricht"</p>',
        trans: '',
        author: 'Ḫwāǧe Šams ad-Dīn Moḥammad Ḥāfeẓ-e Šīrāzī',
        death: '(† ca. 1390 n. Chr. / 792 d. H.)',
        autlink: 'https://en.wikipedia.org/wiki/Hafez',
        source: 'Dīwāne Ḥāfeẓ'
    },
    {
        title: 'rubāʿīy 25',
        text: '<p>Behandle, Freund, nicht grausam deinen Feind;<br/>Trink\' lauteren Wein und sei vergnügt dabei;</p><p>Den Kunstliebenden gib deinen Kragen Preis<br/>Doch von den Schurken mach\' den Saum dir frei.</p>',
        trans: '',
        author: 'Ḫwāǧe Šams ad-Dīn Moḥammad Ḥāfeẓ-e Šīrāzī',
        death: '(† ca. 1390 n. Chr. / 792 d. H.)',
        autlink: 'https://en.wikipedia.org/wiki/Hafez',
        source: 'Dīwāne Ḥāfeẓ'    
    },
    {
        title: 'rubāʿīy 33',
        text: '<p>Du, vor dem die keusche Knospe sich errötend neigt<br/>Und die trunkene Narzisse Scham und Staunen zeig!</p><p>Kann mit dir doch selbst die Rose sich vergleichen nicht,<br/>Denn sie borget von dem Monde, er von dir das Licht.</p>',
        trans: '',
        author: 'Ḫwāǧe Šams ad-Dīn Moḥammad Ḥāfeẓ-e Šīrāzī',
        death: '(† ca. 1390 n. Chr. / 792 d. H.)',
        autlink: 'https://en.wikipedia.org/wiki/Hafez',
        source: 'Dīwāne Ḥāfeẓ'
    },
    {
        title: 'ʾUmayma',
        text: '<p>Oh dass ich wissen könnte, was nun ʾUmayma denkt,<br/>Und ob sie die Gedanken noch auf den Fernen lenkt!</p><p>Ob zwischen uns geschlungen besteht treu das Band<br/>Der Liebe, oder Glauben sie falschen Reden schenkt!</p><p>Nun, wenn du Jahresfristen von ihr enfernet bleist,<br/>Dann wirst du wohl erfahren, was freut dich oder kränkt.</p><p><br/></p>',
        trans: '',
        author: 'ʾImruʾ l-Qays Ḥuǧr ibn al-Ḥāriṯ al-Kindī',
        death: '(† ca. 550 n. Chr. / 74 v. d. H.)',
        autlink: 'https://de.wikipedia.org/wiki/Imru%27_al-Qais',
        source: 'Dīwān II., 5-7 (Übersetzung nach Friedrich Rückert)'
    },
    {
        title: 'Māwīya',
        text: '<p>Oh Māwīya, gwährst du nach nächt\'gem Ritte Rast?<br/>Sprich, oder ob beschlossen du unsre Trennung hast,</p><p>Damit ich ganz verzweifle! ja deutlich rede du,<br/>Und vom verworrnen Zweifeln gibt mir die Trennung Ruh.</p>',
        trans: '',
        author: 'ʾImrū al-Qays Ḥuǧr ibn al-Ḥāriṯ al-Kindī',
        death: '(† ca. 550 n. Chr. / 74 v. d. H.)',
        autlink: 'https://de.wikipedia.org/wiki/Imru%27_al-Qais',
        source: 'Dīwān XI., 1-2 (Übersetzung nach Friedrich Rückert)'
    },
    {
        title: 'An Hind bint ʾImraʾ l-Qays (Tochter des Dichters)',
        text: '<p>Weh, Hind, o Weh und Schade! So mußten uns entweichen<br/>Die Leut\', an denen Rache wir hofften zu erreichen.</p><p>Ihr gutes Glück beschirmte sie hinter ihren Vettern,<br/>Und Unglücksel\'ge wurden getroffen von den Wettern.</p><p>Der Meuterei entgangen ist Ilba mit Gekeuche;<br/>Wo sie erreicht ihn hätte, so wurden leer die Schläuche.</p>',
        trans: '',
        author: 'ʾImruʾ al-Qays Ḥuǧr ibn al-Ḥāriṯ al-Kindī',
        death: '(† ca. 550 n. Chr. / 74 v. d. H.)',
        autlink: 'https://de.wikipedia.org/wiki/Imru%27_al-Qais',
        source: 'Dīwān XXII. (Übersetzung nach Friedrich Rückert)'
    },    
    {
        title: 'Gedicht 28',
        text: '<p>Diesem und manch andr\'em Durstigen habe ich als Morgentrunk<br/>einen, dem trinkenden wohlschmeckenden Wein ausgeschenkt.</p><p>Sie kamen früh im letzten Drittel der Nacht zu mir, worauf ich<br/>mit einem Weinbehälter, der einer Milchkanne glich, den Trunk ausschenkte</p><p>Ein Behälter aus Glas, der beide Hände füllend<br/>einer Osterlampe in einer frommen Kirche glich.</p>',
        trans: '',
        author: 'ʿAdī ibn Zayd al-ʿIbādī',
        death: '(† ca. 600 n. Chr. / 22 v. d. H.)',
        autlink: 'https://en.wikipedia.org/wiki/Adi_ibn_Zayd',
        source: 'Dīwān ʿAdī ibn Zayd (Übersetzung Dominik Oesterle)'
    },
    {
        title: 'Gedicht 1 (1-7)',
        text: '<p>Für wen ist die Nacht lang und furchterregend um eines Gefangenen willen<br/>um eines Gefangenen willen, weil ein innerer Kummer ihn bedrückt</p><p>Was ist das Verbrechen eines Mannes, der eine lange Kette<br/>um seinen Hals und Fesseln an seinen Beinen trägt?</p><p>Deine Mutter, o ʿAmr, mag dir nach meinem Tod geraubt werden.<br/>Sitzt du still oder springst du auf, weil ich nicht freigelassen werde?</p><p>Betrübt es dich nicht, dass dein Vater gefangen ist<br/>während du dich abseits hältst? Mögen die Ġūle mit dir fliehen!</p><p>Die Tochter von al-Qeyn ibn Jasr singt zu dir, und<br/>Wein ist dein Gefährte in deinem Wahnsinn.</p><p>Wärst du der Gefangene - mögest du nicht so sein!<br/>dann würde ganz Maʿadd wissen, was ich sage.</p><p>Wenn ich falle, dann habe ich meinem Volk Wohltaten verliehen<br/>Wohltaten, die alle gut und gerecht sind;</p><p>Und ich habe nicht gezögert im Kampf für edle Taten<br/>ob das Schicksal des Todes mich bald ereilt, oder ob ich lange warten muss.</p>',
        trans: '',
        author: 'ʿAdī ibn Zayd al-ʿIbādī',
        death: '(† ca. 600 n. Chr. / 22 v. d. H.)',
        autlink: 'https://en.wikipedia.org/wiki/Adi_ibn_Zayd',
        source: 'Dīwān ʿAdī ibn Zayd (Übersetzung nach Josef Horovitz)'
    },
    {
        title: 'Gedicht 101',
        text: '<p>Glaubst du, dass die Gesellschaft mit uns und die Schicklichkeit<br/>der Konversation deine Besitztümer zerstören würden?</p><p>Besitztümer und Menschen sind ein Schlachtfeld<br/>für deine Herrschaft oder für deine Züchtigung</p><p>Was auch immer du in Bezug auf uns anordnest,<br/>die Anordnung liegt in deiner Rechten oder in deiner Linken.</p>',
        trans: '',
        author: 'ʿAdī ibn Zayd al-ʿIbādī',
        death: '(† ca. 600 n. Chr. / 22 v. d. H.)',
        autlink: 'https://en.wikipedia.org/wiki/Adi_ibn_Zayd',
        source: 'Dīwān ʿAdī ibn Zayd (Übersetzung nach Josef Horovitz)'
    },
    {
        title: 'Gedicht 113',
        text: '<p>Immer wenn ich im Kloster der Banū ʿAlqamā zeche,<br/>und ich ihnen gekühlten Wein einschenke,</p><p>ist es als ob ein Geruch von Moschus in ihrem Becher ist,<br/>wenn wir den Wein mit Regenwasser mischen.</p><p>ʿAlqamu, was meinst du? Du bist nicht zu uns getreten.<br/>Dürstet es dich heute nicht, zu genießen?</p><p>Wen Leben und Vergnügen glücklich machen,<br/>dem verschaft der Wein eine Leiter.</p>',
        trans: '',
        author: 'ʿAdī ibn Zayd al-ʿIbādī',
        death: '(† ca. 600 n. Chr. / 22 v. d. H.)',
        autlink: 'https://en.wikipedia.org/wiki/Adi_ibn_Zayd',
        source: 'Dīwān ʿAdī ibn Zayd (Übersetzung Dominik Oesterle)'
    },
];

export default poems;