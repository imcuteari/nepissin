export const generateImageFilename = (recipeName: string): string => {
  // Önce tüm metni küçük harfe çevir
  let filename = recipeName.toLowerCase();
  
  // Türkçe karakterleri değiştir ve Unicode normalizasyonu yap
  filename = filename
    .normalize('NFD') // Unicode normalizasyonu
    .replace(/[\u0300-\u036f]/g, '') // Diyakritik işaretleri kaldır
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/i̇/g, 'i'); // Türkçe i karakterini düzelt
  
  // Boşlukları kaldır
  filename = filename.replace(/\s+/g, '');
  
  // Parantezleri ve içindekileri kaldır
  filename = filename.replace(/\([^)]*\)/g, '');
  
  // Özel durumlar için kontrol
  const specialCases: { [key: string]: string } = {
    // Tatlılar
    'sutlac': 'sutlac.webp',
    'revani': 'revani.webp',
    'kazandibi': 'kazandibi.webp',
    'irmikhelvasi': 'irmikhelvasi.webp',
    'tavukgogsu': 'tavukgogsutatli.webp',
    'kemalpasatatlisi': 'kemalpasa.webp',
    'sekerpare': 'sekerpare.webp',
    'hosmerim': 'hosmerim.webp',
    'asure': 'asure.webp',
    'gullac': 'gullac.webp',
    'baklava': 'baklava.webp',
    'kunefe': 'kunefe.webp',
    'lokma': 'lokma.webp',
    'tulumbatatlisi': 'tulumba.webp',
    'kalburabasti': 'kalburabasti.webp',
    'firinsutlac': 'firinsutlac.webp',
    'firinsutlac(kremali)': 'firinsutlackremali.webp', // Fırın Sütlaç (Kremalı) için
    'irmikhelvasifirinda': 'irmikhelvasifirinda.webp',
    'kadayifdolmasi': 'kadayifdolmasi.webp',
    'cevizlisarma': 'cevizlisarma.webp',
    'firinsutlackremali': 'firinsutlackremali.webp',
    'kabaktatlisi': 'kabaktatlisi.webp',
    'ayvatatlisi': 'ayvatatlisi.webp',
    'elmatatlisi': 'elmatatlisi.webp',
    'armuttatlisi': 'armuttatlisi.webp',
    'incirtatlisi': 'incirtatlisi.webp',
    'visnetatlisi': 'visnetatlisi.webp',
    'kayisitatlisi': 'kayisitatlisi.webp',
    'seftalitatlisi': 'seftalitatlisi.webp',
    'eriktatlisi': 'eriktatlisi.webp',
    'uzumtatlisi': 'uzumtalisi.webp',
    'pratikpasta': 'pratikpasta.webp',
    'profiterol': 'profiterol.webp',
    'tiramisu': 'tiramisu.webp',
    'limonlucheesecake': 'limonlucheesecake.webp',
    'limonlukek': 'limonlukek.webp',
    'meyvelikek': 'meyvelikek.webp',
    'meyvelitart': 'meyvelitart.webp',
    'muzlupasta': 'muzlupasta.webp',
    'portakallikek': 'portakallikek.webp',
    'frambuazlicheesecake': 'frambuazlicheesecake.webp',
    'havuclucevizlikek': 'havuclucevizlikek.webp',
    'islakkek': 'islakkek.webp',
    'kakaolupasta': 'kakaolupasta.webp',
    'kurabiye': 'kurabiye.webp',
    'cikolatalicheescake': 'cikolatalicheescake.webp',
    'cikolatalimuffin': 'cikolatalimuffin.webp',
    'cikolatalipasta': 'cikolatalipasta.webp',
    'cikolatalisuffle': 'cikolatalisuffle.webp',
    'elmalikek': 'elmalikek.webp',
    'cikolatalicheesecake': 'cikolatalicheescake.webp', // Çikolatalı cheesecake için eşleştirme
    'cikolatalisufle': 'cikolatalisuffle.webp', // Çikolatalı sufle için eşleştirme
    'cikolatalikek': 'cikolatalikek.webp', // Çikolatalı kek için eşleştirme
    'limonlupasta': 'limonlupasta.webp', // Limonlu pasta için eşleştirme
    'visnelikek': 'visnelikek.webp', // Vişneli kek için eşleştirme

    // Salata ve Mezeler
    'semizotusalatasi': 'semizotusalatasi.webp',
    'cevizlibibersalatasi': 'cevizlibibersalatasi.webp',
    'cobansalata': 'cobansalatasi.webp',
    'haydari': 'haydari.webp',
    'humus': 'humus.webp',
    'muhammara': 'muhammara.webp',
    'patlicansalatasi': 'patlicansalatasi.webp',
    'aciliezme': 'aciliezme.webp',
    'cigkofte': 'cigkofte.webp',
    'dolma': 'dolma.webp',
    'kisir': 'kisir.webp',
    'mercimekkoftesi': 'mercimekkoftesi.webp',
    'mucver': 'mucver.webp',
    'patateskoftesi': 'patateskoftesi.webp',

    // Kahvaltılık ve Börekler
    'zeytinlipogaca': 'zeytinlipogaca.webp',
    'peynirlipogaca': 'peynirlipogaca.webp',
    'peynirlitost': 'peynirlitost.webp',
    'simit': 'simit.webp',
    'sucukluomlet': 'sucukluomlet.webp',
    'sucuklutost': 'sucuklutost.webp',
    'sucukluyumurta': 'sucukluyumurta.webp',
    'zeytinlipide': 'zeytinlipide.webp',
    'ispanakligozleme': 'ispanakligozleme.webp',
    'mantarliomlet': 'mantarliomlet.webp',
    'menemen': 'menemen.webp',
    'pastirmaliyumurta': 'pastirmaliyumurta.webp',
    'patatesligozleme': 'patatesligozleme.webp',
    'patateslipogaca': 'patateslipogaca.webp',
    'peynirliborek': 'peynirliborek.webp',
    'peynirliomlet': 'peynirliomlet.webp',
    'suboregi': 'suboregi.webp', // Su böreği için yeni resim

    // Çorbalar
    'yaylacorbasi': 'yaylacorbasi.webp',
    'tavuksuyucorbasi': 'tavuksuyucorbasi.webp',
    'kremalipatatescorbasi': 'kremalipatatescorbasi.webp',
    'kremalipirasacorbasi': 'kremalipirasacorbasi.webp',
    'mantarkremasi': 'mantarkremasi.webp',
    'mercimekcorbasi': 'mercimekcorbasi.webp',
    'sebzecorbasi': 'sebzecorbasi.webp',
    'sehriyecorbasi': 'sehriyecorbasi.webp',
    'tarhanacorbasi': 'tarhanacorbasi.webp',
    'iskembecorbasi': 'iskembecorbasi.webp',
    'kabakcorbasi': 'kabakcorbasi.webp',
    'kremalibalkabagicorbasi': 'kremalibalkabagicorbasi.webp',
    'kremalibezelyecorbasi': 'kremalibezelyecorbasi.webp',
    'kremalihavuccorbasi': 'kremalihavuccorbasi.webp',
    'kremaliispanakcorbasi': 'kremaliispanakcorbasi.webp',
    'kremalikarnabaharcorbasi': 'kremalikarnabaharcorbasi.webp',
    'kremalimantarcorbasi': 'kremalimantarcorbasi.webp',
    'brokolikremasi': 'brokolikremasi.webp',
    'domatescorbasi': 'domatescorbasi.webp',

    // Sarmalar
    'sarma': 'sarma.webp',
    'etliyapraksarma': 'sarma.webp',
    'etlilahanasarma': 'sarma.webp',
    'etliteredolmasi': 'etliteredolmasi.webp' // Etli Tere Dolması için
  };
  
  // Özel durum kontrolü
  if (specialCases[filename]) {
    return specialCases[filename];
  }
  
  // Genel durum için .webp uzantısı ekle
  return `${filename}.webp`;
}; 