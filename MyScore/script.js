(function (d) {
  'use strict';

  const listProvinces = [
    [
      0,
      'Aceh',
      [
        'Kab. Aceh Barat',
        'Kab. Aceh Barat Daya',
        'Kab. Aceh Besar',
        'Kab. Aceh Jaya',
        'Kab. Aceh Selatan',
        'Kab. Aceh Singkil',
        'Kab. Aceh Tamiang',
        'Kab. Aceh Tengah',
        'Kab. Aceh Tenggara',
        'Kab. Aceh Timur',
        'Kab. Aceh Utara',
        'Kab. Bener Meriah',
        'Kab. Bireuen',
        'Kab. Gayo Lues',
        'Kab. Nagan Raya',
        'Kab. Pidie',
        'Kab. Pidie Jaya',
        'Kab. Simeulue',
        'Kota. Banda Aceh',
        'Kota. Lhokseumawe',
        'Kota. Sabang',
        'Kota. Subulussalam',
      ],
    ],
    [1, 'Bali', ['Kab. Badung', 'Kab. Bangli', 'Kab. Buleleng', 'Kab. Gianyar', 'Kab. Jembrana', 'Kab. Karangasem', 'Kab. Klungkung', 'Kab. Tabanan', 'Kota. Denpasar']],
    [2, 'Banten', ['Kab. Lebak', 'Kab. Pandeglang', 'Kab. Serang', 'Kab. Tangerang', 'Kota. Cilegon', 'Kota. Serang', 'Kota. Tangerang', 'Kota. Tangerang Selatan']],
    [3, 'Bengkulu', ['Kota. Bengkulu', 'Kab. Bengkulu Tengah', 'Kab. Bengkulu Selatan', 'Kab. Bengkulu Utara', 'Kab. Kaur', 'Kab. Kepahiang', 'Kab. Lebong', 'Kab. Rejang Lebong', 'Kab. Muko Muko', 'Kab. Seluma']],
    [4, 'Daerah Istimewa Yogyakarta', ['Kota. Yogyakarta', 'Kab. Bantul', 'Kab. Sleman', 'Kab. Kulon Progo', 'Kab. Gunungkidul']],
    [5, 'DKI Jakarta', ['Kab. Kepulauan Seribu', 'Kota. Jakarta Barat', 'Kota. Jakarta Pusat', 'Kota. Jakarta Selatan', 'Kota. Jakarta Timur', 'Kota. Jakarta Utara']],
    [6, 'Gorontalo', ['Kab. Boalemo', 'Kab. Bone Bolango', 'Kab. Gorontalo', 'Kab. Gorontalo Utara', 'Kab. Pohuwato', 'Kota. Gorontalo']],
    [7, 'Jambi', ['Kab. Batanghari', 'Kab. Bungo', 'Kab. Kerinci', 'Kab. Merangin', 'Kab. Muaro Jambi', 'Kab. Sarolangun', 'Kab. Tanjung Jabung Barat', 'Kab. Tanjung Jabung Timur', 'Kab. Tebo', 'Kota. Jambi', 'Kota. Sungai Penuh']],
    [
      8,
      'Jawa Barat',
      [
        'Kab. Bandung',
        'Kab. Bandung Barat',
        'Kab. Bekasi',
        'Kab. Bogor',
        'Kab. Ciamis',
        'Kab. Cianjur',
        'Kab. Cirebon',
        'Kab. Garut',
        'Kab. Indramayu',
        'Kab. Karawang',
        'Kab. Kuningan',
        'Kab. Majalengka',
        'Kab. Pangandaran',
        'Kab. Purwakarta',
        'Kab. Subang',
        'Kab. Sukabumi',
        'Kab. Sumedang',
        'Kab. Tasikmalaya',
        'Kota. Bandung',
        'Kota. Banjar',
        'Kota. Bekasi',
        'Kota. Bogor',
        'Kota. Cimahi',
        'Kota. Cirebon',
        'Kota. Depok',
        'Kota. Sukabumi',
        'Kota. Tasikmalaya',
      ],
    ],
    [
      9,
      'Jawa Tengah',
      [
        'Kab. Banjarnegara',
        'Kab. Banyumas',
        'Kab. Batang',
        'Kab. Blora',
        'Kab. Boyolali',
        'Kab. Brebes',
        'Kab. Cilacap',
        'Kab. Demak',
        'Kab. Grobogan',
        'Kab. Jepara',
        'Kab. Karanganyar',
        'Kab. Kebumen',
        'Kab. Kendal',
        'Kab. Klaten',
        'Kab. Kudus',
        'Kab. Magelang',
        'Kab. Pati',
        'Kab. Pekalongan',
        'Kab. Pemalang',
        'Kab. Purbalingga',
        'Kab. Purworejo',
        'Kab. Rembang',
        'Kab. Semarang',
        'Kab. Sragen',
        'Kab. Sukoharjo',
        'Kab. Tegal',
        'Kab. Temanggung',
        'Kab. Wonogiri',
        'Kab. Wonosobo',
        'Kota. Magelang',
        'Kota. Pekalongan',
        'Kota. Salatiga',
        'Kota. Semarang',
        'Kota. Surakarta',
        'Kota. Tegal',
      ],
    ],
    [
      10,
      'Jawa Timur',
      [
        'Kab. Bangkalan',
        'Kab. Banyuwangi',
        'Kab. Blitar',
        'Kab. Bojonegoro',
        'Kab. Bondowoso',
        'Kab. Gresik',
        'Kab. Jember',
        'Kab. Jombang',
        'Kab. Kediri',
        'Kab. Lamongan',
        'Kab. Lumajang',
        'Kab. Madiun',
        'Kab. Magetan',
        'Kab. Malang',
        'Kab. Mojokerto',
        'Kab. Nganjuk',
        'Kab. Ngawi',
        'Kab. Pacitan',
        'Kab. Pamekasan',
        'Kab. Pasuruan',
        'Kab. Ponorogo',
        'Kab. Probolinggo',
        'Kab. Sampang',
        'Kab. Sidoarjo',
        'Kab. Situbondo',
        'Kab. Sumenep',
        'Kab. Trenggalek',
        'Kab. Tuban',
        'Kab. Tulungagung',
        'Kota. Batu',
        'Kota. Blitar',
        'Kota. Kediri',
        'Kota. Madiun',
        'Kota. Malang',
        'Kota. Mojokerto',
        'Kota. Pasuruan',
        'Kota. Probolinggo',
        'Kota. Surabaya',
      ],
    ],
    [
      11,
      'Kalimantan Barat',
      [
        'Kab. Bengkayang',
        'Kab. Kapuas hulu',
        'Kab. Kayong Utara',
        'Kab. Ketapang',
        'Kab. Kubu Raya',
        'Kab. Landak',
        'Kab. Melawi',
        'Kab. Mempawah',
        'Kab. Sambas',
        'Kab. Sanggau',
        'Kab. Sekadau',
        'Kab. Sintang',
        'Kota. Pontianak',
        'Kota. Singkawang',
      ],
    ],
    [
      12,
      'Kalimantan Selatan',
      [
        'Kab. Balangan',
        'Kab. Banjar',
        'Kab. Barito Kuala',
        'Kab. Hulu Sungai Selatan',
        'Kab. Hulu Sungai Tengah',
        'Kab. Hulu Sungai Utara',
        'Kab. Kotabaru',
        'Kab. Tabalong',
        'Kab. Tanah Bumbu',
        'Kab. Tanah Laut',
        'Kab. Tapin',
        'Kota. Banjarbaru',
        'Kota. Banjarmasin',
      ],
    ],
    [
      13,
      'Kalimantan Tengah',
      [
        'Kab. Barito Selatan',
        'Kab. Barito Timur',
        'Kab. Barito Utara',
        'Kab. Gunung Mas',
        'Kab. Kapuas',
        'Kab. Katingan',
        'Kab. Kotawaringin Barat',
        'Kab. Kotawaringin Timur',
        'Kab. Lamandau',
        'Kab. Murung Raya',
        'Kab. Pulang Pisau',
        'Kab. Sukamar',
        'Kab. Seruyan',
        'Kota. Palangka Raya',
      ],
    ],
    [14, 'Kalimantan Timur', ['Kab. Berau', 'Kab. Kutai Barat', 'Kab. Kutai Kartanegara', 'Kab. Kutai Timur', 'Kab. Mahakam Ulu', 'Kab. Paser', 'Kab. Penajam Paser Utara', 'Kota. Balikpapan', 'Kota. Bontang', 'Kota. Samarinda']],
    [15, 'Kalimantan Utara', ['Kab. Bulungan', 'Kab. Malinau', 'Kab. Nunukan', 'Kab. Tana Tidung', 'Kota. Tarakan']],
    [16, 'Kep. Bangka Belitung', ['Kab. Bangka', 'Kab. Bangka Barat', 'Kab. Bangka Selatan', 'Kab. Bangka Tengah', 'Kab. Belitung', 'Kab. Belitung Timur', 'Kota Pangkalpinang']],
    [17, 'Kep. Riau', ['Kab. Bintan', 'Kab. Karimun', 'Kab. Kepulauan Anambas', 'Kab. Lingga', 'Kab. Natuna', 'Kota. Batam', 'Kota. Tanjungpinang']],
    [
      18,
      'Lampung',
      [
        'Kab. Lampung Barat',
        'Kab. Lampung Selatan',
        'Kab. Lampung Tengah',
        'Kab. Lampung Timur',
        'Kab. Lampung Utara',
        'Kab. Mesuji',
        'Kab. Pesawaran',
        'Kab. Pesisir Barat',
        'Kab. Pringsewu',
        'Kab. Tanggamus',
        'Kab. Tulang Bawang',
        'Kab. Tulang Bawang Barat',
        'Kab. Way Kanan',
        'Kota. Bandar Lampung',
        'Kota. Metro',
      ],
    ],
    [
      19,
      'Maluku',
      [
        'Kab. Buru',
        'Kab. Buru Selatan',
        'Kab. Kepulauan Aru',
        'Kab. Maluku Barat Daya',
        'kab. Maluku Tengah',
        'Kab. Maluku Tenggara',
        'Kab. Kepulauan Tanimbar',
        'Kab. Seram Bagian Barat',
        'Kab. Seram Bagian Timur',
        'Kota. Ambon',
        'Kota Tual',
      ],
    ],
    [
      20,
      'Maluku Utara',
      ['Kab. Halmahera Barat', 'Kab. Halmahera Tengah', 'Kab. Halmahera Timur', 'Kab. Halmahera Selatan', 'Kab. Halmahera Utara', 'Kab. Kepulauan Sula', 'Kab. Pulau Morotai', 'Kab. Pulau Taliabu', 'Kota. Ternate', 'Kota. Tidore Kepulauan'],
    ],
    [21, 'Nusa Tenggara Barat', ['Kab. Bima', 'Kab. Dompu', 'Kab. Lombok Barat', 'Kab. Lombok Tengah', 'Kab. Lombok Timur', 'Kab. Lombok Utara', 'Kab. Sumbawa', 'Kab. Sumbawa Barat', 'Kota. Bima', 'Kota. Mataram']],
    [
      22,
      'Nusa Tenggara Timur',
      [
        'Kab. Alor',
        'Kab. Belu',
        'Kab. Ende',
        'Kab. Flores Timur',
        'Kab. Kupang',
        'Kab. Lembata',
        'Kab. Malaka',
        'Kab. Manggarai',
        'Kab. Manggarai Barat',
        'Kab. Manggarai Timur',
        'Kab. Nagekeo',
        'Kab. Ngada',
        'Kab. Rote Ndao',
        'Kab. Sabu Raijua',
        'Kab. Sikka',
        'Kab. Sumba Barat',
        'Kab. Sumba Barat Daya',
        'Kab. Sumba Tengah',
        'Kab. Sumba Timur',
        'Kab. Timor Tengah Selatan',
        'Kab. Timor Tengah Utara',
        'Kota. Kupang',
      ],
    ],
    [
      23,
      'Papua',
      [
        'Kab. Asmat',
        'Kab. Biak Numfor',
        'Kab. Boven Dogoel',
        'Kab. Deiyai',
        'Kab. Dogiyai',
        'Kab. Intan Jaya',
        'Kab. Jayapura',
        'Kab. Jayawijaya',
        'Kab. Keerom',
        'Kab. Kepulauan Yapen',
        'Kab. Lanny Jaya',
        'Kab. Mamberamo Raya',
        'Kab. Mamberamo Tengah',
        'Kab. Mappi',
        'Kab. Merauke',
        'Kab. Mimika',
        'Kab. Nabire',
        'Kab. Nduga',
        'Kab. Paniai',
        'Kab. Pegunungan Bintang',
        'Kab. Puncak',
        'Kab. Puncak Jaya',
        'Kab. Sarmi',
        'Kab. Supiori',
        'Kab. Tolikara',
        'Kab. Waropen',
        'Kab. Yahukimo',
        'Kab. Yalimo',
        'Kota. Jayapura',
      ],
    ],
    [
      24,
      'Papua Barat',
      [
        'Kab. Fakfak',
        'Kab. Kaimana',
        'Kab. Manokwari',
        'Kab. Manokwari Selatan',
        'Kab. Maybrat',
        'Kab. Pegunungan Arfak',
        'Kab. Raja Ampat',
        'Kab. Sorong',
        'Kab. Sorong Selatan',
        'Kab. Tambrauw',
        'Kab. Teluk Bintuni',
        'Kab. Teluk Wondama',
        'Kota. Sorong',
      ],
    ],
    [
      25,
      'Riau',
      ['Kab. Bengkalis', 'Kab. Indagiri Hilir', 'Kab. Indagiri Hulu', 'Kab. Kampar', 'Kab. Kepulauan Meranti', 'Kab. Kuantan Singingi', 'Kab. Pelalawan', 'Kab. Rokan Hilir', 'Kab. Rokan Hulu', 'Kab. Siak', 'Kota. Dumai', 'Kota. Pekanbaru'],
    ],
    [26, 'Sulawesi Barat', ['Kab. Majene', 'Kab. Mamasa', 'Kab. Mamuju', 'Kab. Mamuju Tengah', 'Kab. Pasangkayu', 'Kab. Polewali Mandar']],
    [
      27,
      'Sulawesi Selatan',
      [
        'Kab. Bantaeng',
        'Kab. Barru',
        'Kab. Bone',
        'Kab. Bulukumba',
        'Kab. Enrekang',
        'Kab. Gowa',
        'Kab. Jeneponto',
        'Kab. Kepulauan Selayar',
        'Kab. Luwu',
        'Kab. Luwu Timur',
        'Kab. Luwu Utara',
        'Kab. Maros',
        'Kab. Pangkajene dan Kepulauan',
        'Kab. Pinrang',
        'Kab. Sidenreng Rappang',
        'Kab. Sinjau',
        'Kab. Soppeng',
        'Kab. Takalr',
        'Kab. Tana Toraja',
        'Kab. Toraja Utara',
        'Kab. Wajo',
        'Kota. Makassar',
        'Kota. Palopo',
        'Kota. Parepare',
      ],
    ],
    [
      28,
      'Sulawesi Tengah',
      [
        'Kab. Banggai',
        'Kab. Banggai Kepulauan',
        'Kab. Banggai Laut',
        'Kab. Buol',
        'Kab. Donggala',
        'Kab. Morowali',
        'Kab. Morowali Utara',
        'Kab. Parigi Moutong',
        'Kab. Poso',
        'Kab. Sigi',
        'Kab. Tojo Una-una',
        'Kab. Tolitoli',
        'Kota. Palu',
      ],
    ],
    [
      29,
      'Sulawesi Tenggara',
      [
        'Kab. Bombana',
        'Kab. Buton',
        'Kab. Buton Selatan',
        'Kab. Buton Tengah',
        'Kab. Buton Utara',
        'Kab. Kolaka',
        'Kab. Kolaka Timur',
        'Kab. Kolaka Utara',
        'Kab. Konawe',
        'Kab. Konawe Kepulauan',
        'Kab. Konawe Selatan',
        'Kab. Konawe Utara',
        'Kab. Muna',
        'Kab. Muna Barat',
        'Kab. Wakatobi',
        'Kota. Bau-bau',
        'Kota. Kendari',
      ],
    ],
    [
      30,
      'Sulawesi Utara',
      [
        'Kab. Bolaang Mongondow',
        'Kab. Bolaang Mongondow Selatan',
        'Kab. Bolaang Mongondow Timur',
        'Kab. Bolaang Mongondow Utara',
        'Kab. Kepulauan Sangihe',
        'Kab. Kepulauan Siau',
        'Kab. Kepulauan Talaud',
        'Kab. Minahasa',
        'Kab. Minahasa Selatan',
        'Kab. Minahasa Tenggara',
        'Kab. Minahasa Utara',
        'Kota. Bitung',
        'Kota. Kotamobagu',
        'Kota. Manado',
        'Kota. Tomohon',
      ],
    ],
    [
      31,
      'Sumatra Barat',
      [
        'Kab. Agam',
        'Kab. Dharmasraya',
        'Kab. Kepulauan Mentawai',
        'Kab. Lima Puluh Kota',
        'Kab. Padang Pariaman',
        'Kab. Pasaman',
        'Kab. Pasaman Barat',
        'Kab. Pesisir Selatan',
        'Kab. Sijunjung',
        'Kab. Solok',
        'kab. Solok Selatan',
        'Kab. Tanah Datar',
        'Kota. Bukit Tinggi',
        'Kota. Padang',
        'Kota. Padang Panjang',
        'Kota Pariaman',
        'Kota Payakumbuh',
        'Kota Sawahlunto',
        'Kota Solok',
      ],
    ],
    [
      32,
      'Sumatra Selatan',
      [
        'Kab. Banyuasin',
        'Kab. Empat Lawang',
        'Kab. Lahat',
        'Kab. Muara Enim',
        'Kab. Musi Banyuasin',
        'Kab. Musi Rawas',
        'Kab. Musi Rawas Utara',
        'Kab. Ogan Ilir',
        'Kab. Ogan Komering Ilir',
        'Kab. Ogan Komering Ulu',
        'Kab. Ogan Komering Ulu Selatan',
        'Kab. Ogan Komering Ulu Timur',
        'Kab. Penukal Abab Lematang Ilir',
        'Kota. Lubuklinggau',
        'Kota. Pagar Alam',
        'Kota. Palembang',
        'Kota. Prabumulih',
      ],
    ],
    [
      33,
      'Sumatra Utara',
      [
        'Kab. Asahan',
        'Kab. Batu Bara',
        'Kab. Dairi',
        'Kab. Deli Serdang',
        'Kab. Humbang Hasundutan',
        'Kab. Karo',
        'Kab. Labuhanbatu',
        'Kab. Labuhanbatu Selatan',
        'Kab. Labuhanbatu Utara',
        'Kab. Langkat',
        'Kab. Mandailing Natal',
        'Kab. Nias',
        'Kab. Nias Barat',
        'Kab. Nias Selatan',
        'Kab. Nias Utara',
        'Kab. Padang Lawas',
        'Kab. Padang Lawas Utara',
        'Kab. Pakpak Bharat',
        'Kab. Samosir',
        'Kab. Serdang Bedagai',
        'Kab. Simalungun',
        'Kab. Tapanuli Selatan',
        'Kab. Tapanuli Tengah',
        'Kab. Tapanuli Utara',
        'Kab. Toba Samosir',
        'Kota. Binjai',
        'Kota. Gunungsitoli',
        'Kota. Medan',
        'Kota. Padangsidempuan',
        'Kota. Pematangsiantar',
        'Kota. Sibolga',
        'Kota. Tanjungbalai',
        'Kota. Tebing Tinggi',
      ],
    ],
  ];

  const rangeYears = [2022, 1970];

  const listMonths = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Oktober', 'Desember'];

  const jenisKelamin = ['Laki-laki', 'Perempuan'];

  const creditCharacterCriterias = {
    age: [
      [0, 'kurang dari atau 25 tahun'],
      [4, '26 sampai 35 tahun'],
      [3, '36 sampai 45 tahun'],
      [2, '46 sampai 60 tahun'],
    ],
    education: [
      [1, 'SD'],
      [2, 'SMP-SMA'],
      [3, 'D1-S1/D4'],
      [4, 'S2-S3'],
    ],
    marriage: [
      [2, 'belum menikah'],
      [1, 'sudah menikah'],
      [2, 'cerai'],
    ],
    dependent: [
      [4, 'Tidak ada'],
      [3, 'Kurang dari 3 orang'],
      [2, '4 sampai 5 orang'],
      [1, 'lebih dari 5 orang'],
    ],
    workedtime: [
      [0, 'Kurang dari 1 tahun'],
      [1, '1-2 tahun'],
      [2, '2-4 tahun'],
      [3, 'lebih dari 4 tahun'],
    ],
    gender: [
      [1, 'Laki-laki'],
      [2, 'Perempuan'],
    ],
    creditCard: [
      [3, 'tidak ada'],
      [2, '1 sampai 2'],
      [1, '3 sampai 5'],
      [0, 'lebih dari 5'],
    ],
    insurance: [
      [0, 'tidak ada'],
      [1, 'ada'],
    ],
    debitCard: [
      [0, 'tidak ada'],
      [2, '1 sampai 2'],
      [3, '3 sampai 5'],
      [4, 'lebih dari 5'],
    ],
    pinjamanmenunggak: [
      [5, 'tidak ada'],
      [2, '1 sampai 2'],
      [1, '3 sampai 5'],
      [0, 'lebih dari 5'],
    ],
    work: [
      [1, 'Ibu rumah tangga'],
      [2, 'Wiraswasta'],
      [3, 'PNS/Pegawai tetap'],
      [4, 'Profesional'],
    ],
    jabatan: [
      [1, 'Staff'],
      [2, 'Supervisor'],
      [3, 'Manager'],
      [4, 'Pemilik'],
    ],
    totalPengalamanKerja: [
      [1, '1-2 tahun'],
      [2, '3-5 tahun'],
      [4, '6-8 tahun'],
      [6, 'Lebih dari 8 tahun'],
    ],
    investment: [
      [1, 'tidak ada'],
      [2, 'ada'],
    ],
    waktumaksimalmenunggakchar: [
      [5, 'tidak pernah'],
      [3, 'kurang dari 30 hari'],
      [2, '30-45 hari'],
      [1, '45-60 hari'],
      [0, '61-90 hari'],
    ],
    waktuMaksimalMenunggak: [
      [5, 'tidak pernah'],
      [3, 'kurang dari 30 hari'],
      [2, '30-45 hari'],
      [1, '45-60 hari'],
      [0, '61-90 hari'],
    ],
  };

  const creditCapacityCriterias = {
    omsetperBulan: [
      [0, 'Kurang dari Rp1.000.000'],
      [2, '< Rp10.000.000'],
      [3, 'Rp10.000.000 - Rp19.999.999'],
      [4, 'Rp20.000.000 - Rp49.999.999'],
      [5, 'Rp50.000.000 - Rp99.999.999'],
      [6, '> Rp100.000.000'],
    ],
    jumlahFasilitasPinjaman: [
      [4, 'Tidak ada'],
      [3, '1 samapi 3 fasilitas'],
      [2, '3 sampai 5 fasilitas'],
      [1, 'lebih dari 5 fasilitas'],
    ],
    pinjamanTerlama: [
      [4, 'tidak ada'],
      [5, 'kurang dari 1 tahun'],
      [4, '1-2 tahun'],
      [3, '3-5 tahun'],
      [2, '5-10 tahun'],
      [1, 'Lebih dari 10 tahun'],
    ],
    totalPinjamanAktif: [
      [3, 'Tidak ada'],
      [5, '< Rp10.000.000'],
      [4, 'Rp10.000.000 - Rp49.999.999'],
      [2, 'Rp50.000.000 - Rp100.000.000'],
      [1, '>Rp100.000.000'],
    ],
    pengeluaranperBulan: [
      [2, 'Lebih dari Rp100.000.000'],
      [3, 'Rp50.000.000 - Rp99.999.999'],
      [4, 'Rp20.000.000 - Rp49.999.999'],
      [5, 'Rp10.000.000 - Rp19.999.999'],
      [6, 'Rp10.000.000 - Rp19.999.999'],
    ],
    totalPinjamanMenunggak: [
      [5, 'Tidak ada'],
      [2, '1-2 pinjaman'],
      [1, '>2 pinjaman'],
    ],
    waktuMaksimalMenunggak: [
      [5, 'Tidak pernah'],
      [3, 'Kurang dari 30 hari'],
      [2, '30-45 hari'],
      [1, '46-60 hari'],
      [0, '61-90 hari'],
    ],
  };

  const creditCapitalCriterias = {
    kepemilikanAsetInvestasiLancar: [
      [0, 'Tidak ada'],
      [2, 'Surat utang(obligasi/sukuk)'],
      [2, 'Reksa dana'],
      [2, 'Saham'],
      [2, 'Lainnya'],
    ],
    kepemilikanBisnis: [
      [0, 'Tidak ada'],
      [2, 'ada'],
    ],
    umurBisnis: [
      [0, 'Tidak ada'],
      [1, 'kurang dari 1 tahun'],
      [2, '1-2 tahun'],
      [3, '3-5 tahun'],
      [4, '6-10 tahun'],
      [5, '>10 tahun'],
    ],
    kepemilikanTempatTinggal: [
      [0, 'Tidak memiliki'],
      [1, 'Sewa'],
      [2, 'Rumah KPR'],
      [4, 'Milik Sendiri'],
    ],
    totalKepemilikanAset: [
      [0, 'tidak ada'],
      [1, 'Kurang dari Rp100.000.000'],
      [2, 'Rp100.000.000 - Rp499.999.999'],
      [3, 'Rp100.000.000 - Rp499.999.999'],
      [4, 'Lebih dari Rp1.000.000.000'],
    ],
    jangkawaktuTabungan: [
      [0, 'Tidak ada'],
      [1, 'kurang dari 1 tahun'],
      [2, '1-2 tahun'],
      [3, '3-5 tahun'],
      [4, '6-10 tahun'],
      [5, '>10 tahun'],
    ],
    // -------------------------
  };

  const creditConditionCriterias = {
    kinerjaKeuangan1TahunTerakhir: [
      [0, 'Negatif'],
      [5, 'Positif'],
    ],
    dampakEkonomiMakroTerhadapKeuangan: [
      [0, 'Sangat terdampak'],
      [1, 'Terdampak'],
      [3, 'Tidak terdampak'],
    ],
    statusPekerjaan: [
      [5, 'Tetap'],
      [1, 'Tidak tetap'],
    ],
  };

  const creditCollateralCriterias = {
    kepemilikanSKSebagaiJaminan: [
      [0, 'Tidak ada'],
      [5, 'ada'],
    ],
    asetJaminan: [
      [1, 'Tidak ada'],
      [2, 'Kendaraan'],
      [2, 'Mesin dan Peralatan'],
      [3, 'Bangunan'],
      [3, 'Tanah'],
    ],
  };

  const b = d.body;
  b.onload = function () {
    // state
    const state = {
      section: 'personal-field',
      // personal-field
      name: '',
      email: '',
      phone: '',
      province: 'Aceh',
      domicile: '',
      dobYear: rangeYears[0] + '',
      dobMonth: listMonths[0],
      dobDate: 1 + '',
      // credit-character-field
      age: 0,
      education: 1,
      marriage: 2,
      dependent: 4,
      workedtime: 0,
      gender: 1,
      creditCard: 1,
      insurance: 0,
      debitCard: 0,
      pinjamanmenunggak: 5,
      work: 1,
      jabatan: 1,
      totalPengalamanKerja: 1,
      investment: 1,
      waktumaksimalmenunggakchar: 5,
      waktuMaksimalMenunggak: 5,
      // credit-capacity-field
      omsetperBulan: 0,
      jumlahFasilitasPinjaman: 4,
      pinjamanTerlama: 4,
      pengeluaranperBulan: 2,
      totalPinjamanAktif: 1,
      totalPinjamanMenunggak: 0,
      waktuMaksimalMenunggak: 0,
      // credit-capital-field
      kepemilikanAsetInvestasiLancar: 0,
      kepemilikanBisnis: 0,
      umurBisnis: 0,
      kepemilikanTempatTinggal: 0,
      totalKepemilikanAset: 0,
      jangkawaktuTabungan: 0,
      // credit-condition-field
      kinerjaKeuangan1TahunTerakhir: 0,
      dampakEkonomiMakroTerhadapKeuangan: 0,
      statusPekerjaan: 5,
      // credit-collateral-field
      kepemilikanSKSebagaiJaminan: 0,
      asetJaminan: 1,
    };

    const prevBtn = b.querySelector('#prev-btn');
    const nextBtn = b.querySelector('#next-btn');
    // section
    const personalFieldSection = b.querySelector('#personal-field');
    const creditCharacterFieldSection = b.querySelector('#credit-character-field');
    const creditCapacityFieldSection = b.querySelector('#credit-capacity-field');
    const creditCapitalFieldSection = b.querySelector('#credit-capital-field');
    const creditConditionFieldSection = b.querySelector('#credit-condition-field');
    const creditCollateralFieldSection = b.querySelector('#credit-collateral-field');
    const creditScoreSection = b.querySelector('#credit-score');
    //
    const creditScoreSectionValue = b.querySelector('#credit-score-value');

    // Personal Field
    const personalField = function () {
      // get element
      const name = b.querySelector('#name');
      const email = b.querySelector('#email');
      const phone = b.querySelector('#phone');
      const province = b.querySelector('#province');
      const domicile = b.querySelector('#domicile');
      const dobYear = b.querySelector('#dob-year');
      const dobMonth = b.querySelector('#dob-month');
      const dobDate = b.querySelector('#dob-date');

      // render province
      const renderProvince = function () {
        let options = '';
        listProvinces.forEach((province) => {
          options = options + "<option value='" + province[0] + "'>" + province[1] + '</option>';
        });
        province.innerHTML = options;
      };
      renderProvince();

      // render years of DoB
      const renderYearDoB = function () {
        let options = '';
        const listYears = [];
        for (let i = rangeYears[0]; i >= rangeYears[1]; i--) listYears.push(i);
        listYears.forEach((year) => {
          options = options + "<option value='" + year + "'>" + year + '</option>';
        });
        dobYear.innerHTML = options;
      };
      renderYearDoB();

      // render month of DoB
      const renderMonthDoB = function () {
        let options = '';
        listMonths.forEach((month) => {
          options = options + "<option value='" + month + "'>" + month + '</option>';
        });
        dobMonth.innerHTML = options;
      };
      renderMonthDoB();

      // render date of DoB
      const renderDateDoB = function (year, month) {
        let endDate = 0;

        if (month === 'Februari') {
          endDate = year % 4 ? 28 : 29;
        } else {
          endDate = month === 'Januari' || month === 'Maret' || month === 'Mei' || month === 'Juli' || month === 'Agustus' || month === 'Oktober' || month === 'Desember' ? 31 : 30;
        }

        let options = '';
        for (let i = 1; i <= endDate; i++) {
          options = options + "<option value='" + i + "'>" + i + '</option>';
        }

        dobDate.innerHTML = options;
      };
      renderDateDoB(state.dobYear, state.dobMonth);

      // did Update
      const didUpdate = function () {
        //
        if (state.name && state.email && state.phone && state.province && state.domicile && state.dobYear && state.dobMonth && state.dobDate) {
          nextBtn.classList.remove('disabled');
        } else {
          nextBtn.classList.add('disabled');
        }
      };

      // handle change name
      name.onkeyup = function (e) {
        const value = e.target.value;
        state.name = value;
        didUpdate();
      };

      // handle change email
      email.onkeyup = function (e) {
        const value = e.target.value;
        state.email = value;
        didUpdate();
      };

      // handle change phone
      phone.onkeyup = function (e) {
        const value = e.target.value;
        state.phone = value;
        didUpdate();
      };

      // handle change province
      province.onchange = function (e) {
        const value = e.target.value;
        const domiciles = listProvinces[value][2] || [];
        let options = '';
        domiciles.forEach((domicile) => {
          options = options + "<option value='" + domicile + "'>" + domicile + '</option>';
        });
        domicile.innerHTML = options;
        state.province = listProvinces[value][1];
        state.domicile = listProvinces[value][2] ? listProvinces[value][2][0] : '';
        didUpdate();
      };

      // handle change domicile
      domicile.onchange = function (e) {
        const value = e.target.value;
        state.domicile = value;
        didUpdate();
      };

      // handle change year of DoB
      dobYear.onchange = function (e) {
        const value = e.target.value;
        state.dobYear = value;
        state.dobDate = 1;
        renderDateDoB(value, state.dobMonth);
        didUpdate();
      };

      // handle change month of DoB
      dobMonth.onchange = function (e) {
        const value = e.target.value;
        state.dobMonth = value;
        state.dobDate = 1;
        renderDateDoB(state.dobYear, value);
        didUpdate();
      };

      // handle change date of DoB
      dobDate.onchange = function (e) {
        const value = e.target.value;
        state.dobDate = value;
        didUpdate();
      };
    };
    personalField();

    // Credit Character Field
    const creditCharacterField = function () {
      // get element
      const age = b.querySelector('#age');
      const education = b.querySelector('#education');
      const marriage = b.querySelector('#marriage');
      const dependent = b.querySelector('#dependent');
      const workedtime = b.querySelector('#worked-time');
      const gender = b.querySelector('#gender');
      const creditCard = b.querySelector('#credit-card');
      const insurance = b.querySelector('#insurance');
      const debitCard = b.querySelector('#debit-card');
      const pinjamanmenunggak = b.querySelector('#pinjamanmenunggak');
      const work = b.querySelector('#work');
      const jabatan = b.querySelector('#jabatan');
      const totalPengalamanKerja = b.querySelector('#total-pengalaman-kerja');
      const investment = b.querySelector('#investment');
      const waktumaksimalmenunggakchar = b.querySelector('#waktumaksimalmenunggakchar');
      const waktuMaksimalMenunggak = b.querySelector('#waktu-maksimal-menunggak');

      // render age
      const renderAge = function () {
        let options = '';
        creditCharacterCriterias.age.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        age.innerHTML = options;
      };
      renderAge();

      // render education
      const renderEducation = function () {
        let options = '';
        creditCharacterCriterias.education.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        education.innerHTML = options;
      };
      renderEducation();

      // render marriage
      const renderMarriage = function () {
        let options = '';
        creditCharacterCriterias.marriage.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        marriage.innerHTML = options;
      };
      renderMarriage();

      // render dependent
      const renderDependent = function () {
        let options = '';
        creditCharacterCriterias.dependent.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        dependent.innerHTML = options;
      };
      renderDependent();

      // render work
      const renderWork = function () {
        let options = '';
        creditCharacterCriterias.work.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        work.innerHTML = options;
      };
      renderWork();

      // render worked time
      const renderWorkedtime = function () {
        let options = '';
        creditCharacterCriterias.workedtime.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        workedtime.innerHTML = options;
      };
      renderWorkedtime();

      // render gender
      const rendergender = function () {
        let options = '';
        creditCharacterCriterias.gender.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        gender.innerHTML = options;
      };
      rendergender();

      // render creditCard
      const renderCreditCard = function () {
        let options = '';
        creditCharacterCriterias.creditCard.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        creditCard.innerHTML = options;
      };
      renderCreditCard();

      // render insurance
      const renderInsurance = function () {
        let options = '';
        creditCharacterCriterias.insurance.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        insurance.innerHTML = options;
      };
      renderInsurance();

      // render debitCard
      const renderdebitCard = function () {
        let options = '';
        creditCharacterCriterias.debitCard.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        debitCard.innerHTML = options;
      };
      renderdebitCard();

      // render total pinjaman menunggak
      const renderpinjamanmenunggak = function () {
        let options = '';
        creditCharacterCriterias.pinjamanmenunggak.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        pinjamanmenunggak.innerHTML = options;
      };
      renderpinjamanmenunggak();

      // render pekerjaan
      const renderwork = function () {
        let options = '';
        creditCharacterCriterias.work.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        work.innerHTML = options;
      };
      renderwork();

      // render jabatan
      const renderjabatan = function () {
        let options = '';
        creditCharacterCriterias.jabatan.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        jabatan.innerHTML = options;
      };
      renderjabatan();

      // render total pengalaman kerja
      const rendertotalPengalamanKerja = function () {
        let options = '';
        creditCharacterCriterias.totalPengalamanKerja.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        totalPengalamanKerja.innerHTML = options;
      };
      rendertotalPengalamanKerja();

      // render investment
      const renderInvestment = function () {
        let options = '';
        creditCharacterCriterias.investment.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        investment.innerHTML = options;
      };
      renderInvestment();

      // render waktu maksimal menunggak
      const renderwaktumaksimalmenunggakchar = function () {
        let options = '';
        creditCharacterCriterias.waktumaksimalmenunggakchar.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        waktumaksimalmenunggakchar.innerHTML = options;
      };
      renderwaktumaksimalmenunggakchar();

      // did Update
      const didUpdate = function () {
        //
      };

      // handle change age
      age.onchange = function (e) {
        const value = e.target.value;
        state.age = Number(value);
        didUpdate();
      };

      // handle change education
      education.onchange = function (e) {
        const value = e.target.value;
        state.education = Number(value);
        didUpdate();
      };

      // handle change marriage
      marriage.onchange = function (e) {
        const value = e.target.value;
        state.marriage = Number(value);
        didUpdate();
      };

      // handle change dependent
      dependent.onchange = function (e) {
        const value = e.target.value;
        state.dependent = Number(value);
        didUpdate();
      };

      // handle change work
      work.onchange = function (e) {
        const value = e.target.value;
        state.work = Number(value);
        didUpdate();
      };

      // handle change worked time
      workedtime.onchange = function (e) {
        const value = e.target.value;
        state.workedtime = Number(value);
        didUpdate();
      };

      // handle change gender
      gender.onchange = function (e) {
        const value = e.target.value;
        state.gender = Number(value);
        didUpdate();
      };

      // handle change creditCard
      creditCard.onchange = function (e) {
        const value = e.target.value;
        state.creditCard = Number(value);
        didUpdate();
      };

      // handle change debitCard
      debitCard.onchange = function (e) {
        const value = e.target.value;
        state.debitCard = Number(value);
        didUpdate();
      };

      // handle change insurance
      insurance.onchange = function (e) {
        const value = e.target.value;
        state.insurance = Number(value);
        didUpdate();
      };

      // handle change pinjamanmenunggak
      pinjamanmenunggak.onchange = function (e) {
        const value = e.target.value;
        state.pinjamanmenunggak = Number(value);
        didUpdate();
      };

      // handle change jabatan
      jabatan.onchange = function (e) {
        const value = e.target.value;
        state.jabatan = Number(value);
        didUpdate();
      };

      // handle change total pengalaman kerja
      totalPengalamanKerja.onchange = function (e) {
        const value = e.target.value;
        state.totalPengalamanKerja = Number(value);
        didUpdate();
      };

      // handle change investment
      investment.onchange = function (e) {
        const value = e.target.value;
        state.investment = Number(value);
        didUpdate();
      };

      // handle change waktumaksimalmenunggakchar
      waktumaksimalmenunggakchar.onchange = function (e) {
        const value = e.target.value;
        state.waktumaksimalmenunggakchar = Number(value);
        didUpdate();
      };
    };
    creditCharacterField();

    // Credit Capacity Field
    const creditCapacityField = function () {
      // get element
      const omsetperBulan = b.querySelector('#omsetperBulan');
      const jumlahFasilitasPinjaman = b.querySelector('#jumlahFasilitasPinjaman');
      const pinjamanTerlama = b.querySelector('#pinjamanTerlama');
      const totalPinjamanAktif = b.querySelector('#totalPinjamanAktif');
      const pengeluaranperBulan = b.querySelector('#pengeluaranperBulan');
      const totalPinjamanMenunggak = b.querySelector('#totalPinjamanMenunggak');
      const waktuMaksimalMenunggak = b.querySelector('#waktuMaksimalMenunggak');

      // render Bidang Usaha
      const renderomsetPerBulan = function () {
        let options = '';
        creditCapacityCriterias.omsetperBulan.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        omsetperBulan.innerHTML = options;
      };
      renderomsetPerBulan();

      // render Jumlah Fasilitas Pinjaman
      const renderjumlahFasilitasPinjaman = function () {
        let options = '';
        creditCapacityCriterias.jumlahFasilitasPinjaman.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        jumlahFasilitasPinjaman.innerHTML = options;
      };
      renderjumlahFasilitasPinjaman();

      // render pinjaman terlama
      const renderpinjamanTerlama = function () {
        let options = '';
        creditCapacityCriterias.pinjamanTerlama.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        pinjamanTerlama.innerHTML = options;
      };
      renderpinjamanTerlama();

      // render Total Pinjaman Aktif
      const rendertotalPinjamanAktif = function () {
        let options = '';
        creditCapacityCriterias.totalPinjamanAktif.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        totalPinjamanAktif.innerHTML = options;
      };
      rendertotalPinjamanAktif();

      // render Pengeluaran per Bulan
      const renderpengeluaranperBulan = function () {
        let options = '';
        creditCapacityCriterias.pengeluaranperBulan.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        pengeluaranperBulan.innerHTML = options;
      };
      renderpengeluaranperBulan();

      // render Total Pinjaman Menunggak
      const rendertotalPinjamanMenunggak = function () {
        let options = '';
        creditCapacityCriterias.totalPinjamanMenunggak.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        totalPinjamanMenunggak.innerHTML = options;
      };
      rendertotalPinjamanMenunggak();

      // render Waktu Maksimal Menunggak
      const renderwaktuMaksimalMenunggak = function () {
        let options = '';
        creditCapacityCriterias.waktuMaksimalMenunggak.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        waktuMaksimalMenunggak.innerHTML = options;
      };
      renderwaktuMaksimalMenunggak();

      // did Update
      const didUpdate = function () {
        //
      };

      // handle change Omset per Bulan
      omsetperBulan.onchange = function (e) {
        const value = e.target.value;
        state.omsetperBulan = Number(value);
        didUpdate();
      };

      // handle change Jumlah Fasilitas Pinjaman
      jumlahFasilitasPinjaman.onchange = function (e) {
        const value = e.target.value;
        state.jumlahFasilitasPinjaman = Number(value);
        didUpdate();
      };

      // handle change pinjaman terlama
      pinjamanTerlama.onchange = function (e) {
        const value = e.target.value;
        state.pinjamanTerlama = Number(value);
        didUpdate();
      };

      // handle change Total Pinjaman Aktif
      totalPinjamanAktif.onchange = function (e) {
        const value = e.target.value;
        state.totalPinjamanAktif = Number(value);
        didUpdate();
      };

      // handle change Pengeluaran per Bulan
      pengeluaranperBulan.onchange = function (e) {
        const value = e.target.value;
        state.pengeluaranperBulan = Number(value);
        didUpdate();
      };

      // handle change Total Pinjaman Menunggak
      totalPinjamanMenunggak.onchange = function (e) {
        const value = e.target.value;
        state.totalPinjamanMenunggak = Number(value);
        didUpdate();
      };

      // handle change Waktu Maksimal Menunggak
      waktuMaksimalMenunggak.onchange = function (e) {
        const value = e.target.value;
        state.waktuMaksimalMenunggak = Number(value);
        didUpdate();
      };
    };
    creditCapacityField();

    // Credit Capital Field
    const creditCapitalField = function () {
      // get element
      const kepemilikanAsetInvestasiLancar = b.querySelector('#kepemilikanAsetInvestasiLancar');
      const kepemilikanBisnis = b.querySelector('#kepemilikanBisnis');
      const umurBisnis = b.querySelector('#umurBisnis');
      const kepemilikanTempatTinggal = b.querySelector('#kepemilikanTempatTinggal');
      const totalKepemilikanAset = b.querySelector('#totalKepemilikanAset');
      const jangkawaktuTabungan = b.querySelector('#jangkawaktuTabungan');

      // render Kepemilikan aset innvestasi lancar
      const renderkepemilikanAsetInvestasiLancar = function () {
        let options = '';
        creditCapitalCriterias.kepemilikanAsetInvestasiLancar.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        kepemilikanAsetInvestasiLancar.innerHTML = options;
      };
      renderkepemilikanAsetInvestasiLancar();

      // render Kepemilikan bisnis
      const renderkepemilikanBisnis = function () {
        let options = '';
        creditCapitalCriterias.kepemilikanBisnis.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        kepemilikanBisnis.innerHTML = options;
      };
      renderkepemilikanBisnis();

      // render umur bisnis
      const renderumurBisnis = function () {
        let options = '';
        creditCapitalCriterias.umurBisnis.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        umurBisnis.innerHTML = options;
      };
      renderumurBisnis();

      // render total kepemilikan aset
      const rendertotalKepemilikanAset = function () {
        let options = '';
        creditCapitalCriterias.totalKepemilikanAset.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        totalKepemilikanAset.innerHTML = options;
      };
      rendertotalKepemilikanAset();

      // render Kepemilikan Tempat Usaha
      const renderkepemilikanTempatTinggal = function () {
        let options = '';
        creditCapitalCriterias.kepemilikanTempatTinggal.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        kepemilikanTempatTinggal.innerHTML = options;
      };
      renderkepemilikanTempatTinggal();

      // render Jangka Waktu Tabungan
      const renderjangkawaktuTabungan = function () {
        let options = '';
        creditCapitalCriterias.jangkawaktuTabungan.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        jangkawaktuTabungan.innerHTML = options;
      };
      renderjangkawaktuTabungan();

      // did Update
      const didUpdate = function () {
        //
      };

      // handle change kepemilkan aset investasi lancar
      kepemilikanAsetInvestasiLancar.onchange = function (e) {
        const value = e.target.value;
        state.kepemilikanAsetInvestasiLancar = Number(value);
        didUpdate();
      };

      // handle change kepemilkan bisnis
      kepemilikanBisnis.onchange = function (e) {
        const value = e.target.value;
        state.kepemilikanBisnis = Number(value);
        didUpdate();
      };

      // handle change umur bisnis
      umurBisnis.onchange = function (e) {
        const value = e.target.value;
        state.umurBisnis = Number(value);
        didUpdate();
      };

      // handle change Kepemilikan Tempat tinggal
      kepemilikanTempatTinggal.onchange = function (e) {
        const value = e.target.value;
        state.kepemilikanTempatTinggal = Number(value);
        didUpdate();
      };

      // handle change total kepemilikan aset
      totalKepemilikanAset.onchange = function (e) {
        const value = e.target.value;
        state.totalKepemilikanAset = Number(value);
        didUpdate();
      };

      // handle change Jangka Waktu Tabungan
      jangkawaktuTabungan.onchange = function (e) {
        const value = e.target.value;
        state.jangkawaktuTabungan = Number(value);
        didUpdate();
      };
    };
    creditCapitalField();

    // Credit Condition Field
    const creditConditionField = function () {
      // get element
      const kinerjaKeuangan1TahunTerakhir = b.querySelector('#kinerjaKeuangan1TahunTerakhir');
      const dampakEkonomiMakroTerhadapKeuangan = b.querySelector('#dampakEkonomiMakroTerhadapKeuangan');
      const statusPekerjaan = b.querySelector('#statusPekerjaan');

      // render Kinerja Keuangan 1 Tahun Terakhir
      const renderkinerjaKeuangan1TahunTerakhir = function () {
        let options = '';
        creditConditionCriterias.kinerjaKeuangan1TahunTerakhir.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        kinerjaKeuangan1TahunTerakhir.innerHTML = options;
      };
      renderkinerjaKeuangan1TahunTerakhir();

      // render dampak Ekonomi Makro Terhadap Keuangan
      const renderdampakEkonomiMakroTerhadapKeuangan = function () {
        let options = '';
        creditConditionCriterias.dampakEkonomiMakroTerhadapKeuangan.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        dampakEkonomiMakroTerhadapKeuangan.innerHTML = options;
      };
      renderdampakEkonomiMakroTerhadapKeuangan();

      // render status pekerjaan
      const renderstatusPekerjaan = function () {
        let options = '';
        creditConditionCriterias.statusPekerjaan.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        statusPekerjaan.innerHTML = options;
      };
      renderstatusPekerjaan();

      // did Update
      const didUpdate = function () {
        //
      };

      // handle change Kinerja Keuangan 1 Tahun Terakhir
      kinerjaKeuangan1TahunTerakhir.onchange = function (e) {
        const value = e.target.value;
        state.kinerjaKeuangan1TahunTerakhir = Number(value);
        didUpdate();
      };

      // handle change dampak Ekonomi Makro Terhadap Keuangan
      dampakEkonomiMakroTerhadapKeuangan.onchange = function (e) {
        const value = e.target.value;
        state.dampakEkonomiMakroTerhadapKeuangan = Number(value);
        didUpdate();
      };

      // handle change status pekerjaan
      statusPekerjaan.onchange = function (e) {
        const value = e.target.value;
        state.statusPekerjaan = Number(value);
        didUpdate();
      };
    };
    creditConditionField();

    // Credit Collateral Field
    const creditCollateralField = function () {
      // get element
      const kepemilikanSKSebagaiJaminan = b.querySelector('#kepemilikanSKSebagaiJaminan');
      const asetJaminan = b.querySelector('#asetJaminan');

      // render kepemilikanSKSebagaiJaminan
      const renderkepemilikanSKSebagaiJaminan = function () {
        let options = '';
        creditCollateralCriterias.kepemilikanSKSebagaiJaminan.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        kepemilikanSKSebagaiJaminan.innerHTML = options;
      };
      renderkepemilikanSKSebagaiJaminan();

      // render Aset Jaminan
      const renderasetJaminan = function () {
        let options = '';
        creditCollateralCriterias.asetJaminan.forEach((option) => {
          options = options + "<option value='" + option[0] + "'>" + option[1] + '</option>';
        });
        asetJaminan.innerHTML = options;
      };
      renderasetJaminan();

      // did Update
      const didUpdate = function () {
        //
      };

      // handle change kepemilikanSKSebagaiJaminan
      kepemilikanSKSebagaiJaminan.onchange = function (e) {
        const value = e.target.value;
        state.kepemilikanSKSebagaiJaminan = Number(value);
        didUpdate();
      };

      // handle change Aset Jaminan
      asetJaminan.onchange = function (e) {
        const value = e.target.value;
        state.asetJaminan = Number(value);
        didUpdate();
      };
    };
    creditCollateralField();

    // calculate score
    const calculateScore = function () {
      const character =
        0 +
        // character
        state.age +
        state.education +
        state.marriage +
        state.dependent +
        state.workedtime +
        state.gender +
        state.creditCard +
        state.insurance +
        state.debitCard +
        state.pinjamanmenunggak +
        state.work +
        state.jabatan +
        state.totalPengalamanKerja +
        state.investment +
        state.waktumaksimalmenunggakchar +
        // credit-capacity-field
        state.omsetperBulan +
        state.jumlahFasilitasPinjaman +
        state.pinjamanTerlama +
        state.totalPinjamanAktif +
        state.pengeluaranperBulan +
        state.totalPinjamanMenunggak +
        state.waktuMaksimalMenunggak +
        // Credit-capital-field
        state.kepemilikanAsetInvestasiLancar +
        state.kepemilikanBisnis +
        state.umurBisnis +
        state.kepemilikanTempatTinggal +
        state.totalKepemilikanAset +
        state.jangkawaktuTabungan +
        // credit-condition-field
        state.kinerjaKeuangan1TahunTerakhir +
        state.dampakEkonomiMakroTerhadapKeuangan +
        state.statusPekerjaan +
        // credit-collateral-field
        state.kepemilikanSKSebagaiJaminan +
        state.asetJaminan;
      return character;
    };

    const displayPersonalData = function () {
      const name = b.querySelector('#data-name');
      const email = b.querySelector('#data-email');
      const phone = b.querySelector('#data-phone');
      const province = b.querySelector('#data-province');
      const domicile = b.querySelector('#data-domicile');
      const dob = b.querySelector('#data-dob');

      name.innerHTML = state.name;
      email.innerHTML = state.email;
      phone.innerHTML = state.phone;
      province.innerHTML = state.province;
      domicile.innerHTML = state.domicile;
      dob.innerHTML = state.dobDate + ' ' + state.dobMonth + ' ' + state.dobYear;
    };

    const subTitle = document.querySelector('.card#subtitle .sub-title');

    nextBtn.onclick = function () {
      if (!nextBtn.classList.contains('show')) {
        if (state.section === 'personal-field') {
          personalFieldSection.classList.remove('show');
          creditCharacterFieldSection.classList.add('show');
          nextBtn.classList.add('disabled');
          prevBtn.classList.remove('disabled');
          prevBtn.classList.remove('hidden');
          state.section = 'credit-character-field';
          subTitle.innerHTML = 'Character';
        } else if (state.section === 'credit-character-field') {
          creditCharacterFieldSection.classList.remove('show');
          creditCapacityFieldSection.classList.add('show');
          state.section = 'credit-capacity-field';
          subTitle.innerHTML = 'Capacity';
        } else if (state.section === 'credit-capacity-field') {
          creditCapacityFieldSection.classList.remove('show');
          creditCapitalFieldSection.classList.add('show');
          state.section = 'credit-capital-field';
          subTitle.innerHTML = 'Capital';
        } else if (state.section === 'credit-capital-field') {
          creditCapitalFieldSection.classList.remove('show');
          creditConditionFieldSection.classList.add('show');
          state.section = 'credit-condition-field';
          subTitle.innerHTML = 'Condition';
        } else if (state.section === 'credit-condition-field') {
          creditConditionFieldSection.classList.remove('show');
          creditCollateralFieldSection.classList.add('show');
          state.section = 'credit-collateral-field';
          subTitle.innerHTML = 'Collateral';
        } else if (state.section === 'credit-collateral-field') {
          creditCollateralFieldSection.classList.remove('show');
          creditScoreSection.classList.add('show');
          nextBtn.classList.add('disabled');
          nextBtn.classList.add('hidden');
          prevBtn.classList.remove('disabled');
          state.section = 'credit-score';
          subTitle.innerHTML = 'Score';
          creditScoreSectionValue.innerHTML = calculateScore();
          displayPersonalData();
        }
      }
    };

    prevBtn.onclick = function () {
      if (!prevBtn.classList.contains('disabled')) {
        if (state.section === 'credit-character-field') {
          creditCharacterFieldSection.classList.remove('show');
          personalFieldSection.classList.add('show');
          nextBtn.classList.remove('disabled');
          prevBtn.classList.add('disabled');
          prevBtn.classList.add('hidden');
          state.section = 'personal-field';
          subTitle.innerHTML = 'Personal';
        } else if (state.section === 'credit-score') {
          creditScoreSection.classList.remove('show');
          creditCollateralFieldSection.classList.add('show');
          nextBtn.classList.remove('disabled');
          nextBtn.classList.remove('hidden');
          // prevBtn.classList.add('disabled')
          state.section = 'credit-collateral-field';
          subTitle.innerHTML = 'Collateral';
        } else if (state.section === 'credit-collateral-field') {
          creditCollateralFieldSection.classList.remove('show');
          creditConditionFieldSection.classList.add('show');
          nextBtn.classList.remove('disabled');
          nextBtn.classList.remove('hidden');
          // prevBtn.classList.add('disabled')
          state.section = 'credit-condition-field';
          subTitle.innerHTML = 'Condition';
        } else if (state.section === 'credit-condition-field') {
          creditConditionFieldSection.classList.remove('show');
          creditCapitalFieldSection.classList.add('show');
          nextBtn.classList.remove('disabled');
          nextBtn.classList.remove('hidden');
          // prevBtn.classList.add('disabled')
          state.section = 'credit-capital-field';
          subTitle.innerHTML = 'Capital';
        } else if (state.section === 'credit-capital-field') {
          creditCapitalFieldSection.classList.remove('show');
          creditCapacityFieldSection.classList.add('show');
          nextBtn.classList.remove('disabled');
          nextBtn.classList.remove('hidden');
          // prevBtn.classList.add('disabled')
          state.section = 'credit-capacity-field';
          subTitle.innerHTML = 'Capacity';
        } else if (state.section === 'credit-capacity-field') {
          creditCapacityFieldSection.classList.remove('show');
          creditCharacterFieldSection.classList.add('show');
          nextBtn.classList.remove('disabled');
          nextBtn.classList.remove('hidden');
          // prevBtn.classList.add('disabled')
          state.section = 'credit-character-field';
          subTitle.innerHTML = 'Character';
        }
      }
    };
    //
  };
})(document);
