<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ImmunizationSeeder extends Seeder
{

    private $immunizations = [
        [
            "name" => "Hepatitis B 1",
            "type" => "vaksin mati",
            "prevention" => "Mencegah penyakit hepatitis B yang menyebabkan kerusakan hati",
            "indication" => "Bayi baru lahir,Anak belum pernah mendapat vaksin hepatitis B,\nPasien Cuci Darah (Hemodialisis),\n Pasien yang Memerlukan transfusi berulang,\nIndividu yang pekerjaannya beresiko tertular hepatitis B,\nPengguna narkoba jarum suntik,",
            "contraindication" => "Riwayat anafilaksis setelah vaksinasi hepatitis B sebelumnya",
            "chase_immunization" => "Anak atau remaja yang belum pernah divaksinasi harus mendapat 3 dosis, konsultasikan dengan dokter anak",
            "KIPI" => "Reaksi lokal seperti nyeri, kemerahan, bengkak ringan, kadang disertai demam ringan",
            "schedule" => "Vaksin hepatitis B pada bayi diberikan melalui injeksi intramuskuler, yaitu dengan menyuntikkan vaksin pada area otot. Adapun dosis vaksin hepatitis B adalah sebanyak 0,5–1 ml dengan 4 kali dosis utama dan 1 kali booster.",
            "recommended_days" => 0,
        ],
        [
            "name" => "Hepatitis B 2",
            "type" => "vaksin mati",
            "prevention" => "Mencegah penyakit hepatitis B yang menyebabkan kerusakan hati",
            "indication" => "Bayi baru lahir,Anak belum pernah mendapat vaksin hepatitis B,\nPasien Cuci Darah (Hemodialisis),\n Pasien yang Memerlukan transfusi berulang,\nIndividu yang pekerjaannya beresiko tertular hepatitis B,\nPengguna narkoba jarum suntik,",
            "contraindication" => "Riwayat anafilaksis setelah vaksinasi hepatitis B sebelumnya",
            "chase_immunization" => "Anak atau remaja yang belum pernah divaksinasi harus mendapat 3 dosis, konsultasikan dengan dokter anak",
            "KIPI" => "Reaksi lokal seperti nyeri, kemerahan, bengkak ringan, kadang disertai demam ringan",
            "schedule" => "Vaksin hepatitis B pada bayi diberikan melalui injeksi intramuskuler, yaitu dengan menyuntikkan vaksin pada area otot. Adapun dosis vaksin hepatitis B adalah sebanyak 0,5–1 ml dengan 4 kali dosis utama dan 1 kali booster.",
            "recommended_days" => 60,
        ],

        [
            "name" => "Hepatitis B 3",
            "type" => "vaksin mati",
            "prevention" => "Mencegah penyakit hepatitis B yang menyebabkan kerusakan hati",
            "indication" => "Bayi baru lahir,Anak belum pernah mendapat vaksin hepatitis B,\nPasien Cuci Darah (Hemodialisis),\n Pasien yang Memerlukan transfusi berulang,\nIndividu yang pekerjaannya beresiko tertular hepatitis B,\nPengguna narkoba jarum suntik,",
            "contraindication" => "Riwayat anafilaksis setelah vaksinasi hepatitis B sebelumnya",
            "chase_immunization" => "Anak atau remaja yang belum pernah divaksinasi harus mendapat 3 dosis, konsultasikan dengan dokter anak",
            "KIPI" => "Reaksi lokal seperti nyeri, kemerahan, bengkak ringan, kadang disertai demam ringan",
            "schedule" => "Vaksin hepatitis B pada bayi diberikan melalui injeksi intramuskuler, yaitu dengan menyuntikkan vaksin pada area otot. Adapun dosis vaksin hepatitis B adalah sebanyak 0,5–1 ml dengan 4 kali dosis utama dan 1 kali booster.",
            "recommended_days" => 90,
        ],

        [
            "name" => "Hepatitis B 4",
            "type" => "vaksin mati",
            "prevention" => "Mencegah penyakit hepatitis B yang menyebabkan kerusakan hati",
            "indication" => "Bayi baru lahir,Anak belum pernah mendapat vaksin hepatitis B,\nPasien Cuci Darah (Hemodialisis),\n Pasien yang Memerlukan transfusi berulang,\nIndividu yang pekerjaannya beresiko tertular hepatitis B,\nPengguna narkoba jarum suntik,",
            "contraindication" => "Riwayat anafilaksis setelah vaksinasi hepatitis B sebelumnya",
            "chase_immunization" => "Anak atau remaja yang belum pernah divaksinasi harus mendapat 3 dosis, konsultasikan dengan dokter anak",
            "KIPI" => "Reaksi lokal seperti nyeri, kemerahan, bengkak ringan, kadang disertai demam ringan",
            "schedule" => "Vaksin hepatitis B pada bayi diberikan melalui injeksi intramuskuler, yaitu dengan menyuntikkan vaksin pada area otot. Adapun dosis vaksin hepatitis B adalah sebanyak 0,5–1 ml dengan 4 kali dosis utama dan 1 kali booster.",
            "recommended_days" => 90,
        ],

        [
            "name" => "Hepatitis B Booster",
            "type" => "vaksin mati",
            "prevention" => "Mencegah penyakit hepatitis B yang menyebabkan kerusakan hati",
            "indication" => "Bayi baru lahir,Anak belum pernah mendapat vaksin hepatitis B,\nPasien Cuci Darah (Hemodialisis),\n Pasien yang Memerlukan transfusi berulang,\nIndividu yang pekerjaannya beresiko tertular hepatitis B,\nPengguna narkoba jarum suntik,",
            "contraindication" => "Riwayat anafilaksis setelah vaksinasi hepatitis B sebelumnya",
            "chase_immunization" => "Anak atau remaja yang belum pernah divaksinasi harus mendapat 3 dosis, konsultasikan dengan dokter anak",
            "KIPI" => "Reaksi lokal seperti nyeri, kemerahan, bengkak ringan, kadang disertai demam ringan",
            "schedule" => "Vaksin hepatitis B pada bayi diberikan melalui injeksi intramuskuler, yaitu dengan menyuntikkan vaksin pada area otot. Adapun dosis vaksin hepatitis B adalah sebanyak 0,5–1 ml dengan 4 kali dosis utama dan 1 kali booster.",
            "recommended_days" => 540,
        ],

        [
            "name" => "Polio 0",
            "type" => "vaksin hidup",
            "prevention" => "Mencegah penyakit polio yang menyebabkan kelumpuhan",
            "indication" => "Semua bayi baru lahir",
            "contraindication" => "Kondisi gangguan sistem kekebalan tubuh, seperti HIV/AIDS, leukemia, dan limfoma",
            "chase_immunization" => "Saat lahir, bayi diberikan bOPV, selanjutnya diberi Polio 1, Polio 2, Polio 3, dan Polio 4 pada usia 2, 3, 4, dan 18 bulan. Pada usia 4-6 tahun, anak diberikan vaksin Polio 5 (IPV).",
            "KIPI" => "Penyakit polio akbiar OPV",
            "schedule" => "Vaksin polio diberikan melalui suntikan atau pemberian oral (minum). Pemberian vaksin polio oral (OPV) dilakukan sebanyak 4 kali, yaitu saat bayi lahir, usia 2 bulan, 3 bulan, dan 4 bulan. Pemberian vaksin polio suntikan (IPV) dilakukan sebanyak 3 kali, yaitu saat bayi berusia 2 bulan, 4 bulan, dan 18 bulan.",
            "recommended_days" => 0,
        ],

        [
            "name" => "Polio 1",
            "type" => "OPV vaksin hidup, IPV vaksin mati",
            "prevention" => "Mencegah penyakit polio yang menyebabkan kelumpuhan",
            "indication" => "Semua bayi baru lahir",
            "contraindication" => "Kondisi gangguan sistem kekebalan tubuh, seperti HIV/AIDS, leukemia, dan limfoma",
            "chase_immunization" => "Saat lahir, bayi diberikan bOPV, selanjutnya diberi Polio 1, Polio 2, Polio 3, dan Polio 4 pada usia 2, 3, 4, dan 18 bulan. Pada usia 4-6 tahun, anak diberikan vaksin Polio 5 (IPV).",
            "KIPI" => "Penyakit polio akbiar OPV",
            "schedule" => "Vaksin polio diberikan melalui suntikan atau pemberian oral (minum). Pemberian vaksin polio oral (OPV) dilakukan sebanyak 4 kali, yaitu saat bayi lahir, usia 2 bulan, 3 bulan, dan 4 bulan. Pemberian vaksin polio suntikan (IPV) dilakukan sebanyak 3 kali, yaitu saat bayi berusia 2 bulan, 4 bulan, dan 18 bulan.",
            "recommended_days" => 60,
        ],
        [
            "name" => "Polio 2",
            "type" => "OPV vaksin hidup, IPV vaksin mati",
            "prevention" => "Mencegah penyakit polio yang menyebabkan kelumpuhan",
            "indication" => "Semua bayi baru lahir",
            "contraindication" => "Kondisi gangguan sistem kekebalan tubuh, seperti HIV/AIDS, leukemia, dan limfoma",
            "chase_immunization" => "Saat lahir, bayi diberikan bOPV, selanjutnya diberi Polio 1, Polio 2, Polio 3, dan Polio 4 pada usia 2, 3, 4, dan 18 bulan. Pada usia 4-6 tahun, anak diberikan vaksin Polio 5 (IPV).",
            "KIPI" => "Penyakit polio akbiar OPV",
            "schedule" => "Vaksin polio diberikan melalui suntikan atau pemberian oral (minum). Pemberian vaksin polio oral (OPV) dilakukan sebanyak 4 kali, yaitu saat bayi lahir, usia 2 bulan, 3 bulan, dan 4 bulan. Pemberian vaksin polio suntikan (IPV) dilakukan sebanyak 3 kali, yaitu saat bayi berusia 2 bulan, 4 bulan, dan 18 bulan.",
            "recommended_days" => 90,
        ],
        [
            "name" => "Polio 3",
            "type" => "OPV vaksin hidup, IPV vaksin mati",
            "prevention" => "Mencegah penyakit polio yang menyebabkan kelumpuhan",
            "indication" => "Semua bayi baru lahir",
            "contraindication" => "Kondisi gangguan sistem kekebalan tubuh, seperti HIV/AIDS, leukemia, dan limfoma",
            "chase_immunization" => "Saat lahir, bayi diberikan bOPV, selanjutnya diberi Polio 1, Polio 2, Polio 3, dan Polio 4 pada usia 2, 3, 4, dan 18 bulan. Pada usia 4-6 tahun, anak diberikan vaksin Polio 5 (IPV).",
            "KIPI" => "Penyakit polio akbiar OPV",
            "schedule" => "Vaksin polio diberikan melalui suntikan atau pemberian oral (minum). Pemberian vaksin polio oral (OPV) dilakukan sebanyak 4 kali, yaitu saat bayi lahir, usia 2 bulan, 3 bulan, dan 4 bulan. Pemberian vaksin polio suntikan (IPV) dilakukan sebanyak 3 kali, yaitu saat bayi berusia 2 bulan, 4 bulan, dan 18 bulan.",
            "recommended_days" => 120,
        ],
        [
            "name" => "Polio 4 (Pengulangan)",
            "type" => "OPV vaksin hidup, IPV vaksin mati",
            "prevention" => "Mencegah penyakit polio yang menyebabkan kelumpuhan",
            "indication" => "Semua bayi baru lahir",
            "contraindication" => "Kondisi gangguan sistem kekebalan tubuh, seperti HIV/AIDS, leukemia, dan limfoma",
            "chase_immunization" => "Saat lahir, bayi diberikan bOPV, selanjutnya diberi Polio 1, Polio 2, Polio 3, dan Polio 4 pada usia 2, 3, 4, dan 18 bulan. Pada usia 4-6 tahun, anak diberikan vaksin Polio 5 (IPV).",
            "KIPI" => "Penyakit polio akbiar OPV",
            "schedule" => "Vaksin polio diberikan melalui suntikan atau pemberian oral (minum). Pemberian vaksin polio oral (OPV) dilakukan sebanyak 4 kali, yaitu saat bayi lahir, usia 2 bulan, 3 bulan, dan 4 bulan. Pemberian vaksin polio suntikan (IPV) dilakukan sebanyak 3 kali, yaitu saat bayi berusia 2 bulan, 4 bulan, dan 18 bulan.",
            "recommended_days" => 540,
        ],
        [
            "name" => "Polio 5 (IPV)",
            "type" => "IPV vaksin mati",
            "prevention" => "Mencegah penyakit polio yang menyebabkan kelumpuhan",
            "indication" => "Semua bayi baru lahir",
            "contraindication" => "Kondisi gangguan sistem kekebalan tubuh, seperti HIV/AIDS, leukemia, dan limfoma",
            "chase_immunization" => "Saat lahir, bayi diberikan bOPV, selanjutnya diberi Polio 1, Polio 2, Polio 3, dan Polio 4 pada usia 2, 3, 4, dan 18 bulan. Pada usia 4-6 tahun, anak diberikan vaksin Polio 5 (IPV).",
            "KIPI" => "Penyakit polio akbiar OPV",
            "schedule" => "Vaksin polio diberikan melalui suntikan atau pemberian oral (minum). Pemberian vaksin polio oral (OPV) dilakukan sebanyak 4 kali, yaitu saat bayi lahir, usia 2 bulan, 3 bulan, dan 4 bulan. Pemberian vaksin polio suntikan (IPV) dilakukan sebanyak 3 kali, yaitu saat bayi berusia 2 bulan, 4 bulan, dan 18 bulan.",
            "recommended_days" => 540,
        ],
        [
            "name" => "BCG",
            "type" => "vaksin hidup",
            "prevention" => "Mencegah penyakit tuberkulosis (TBC) yang menyerang paru-paru",
            "indication" => "Bayi usia kurang dari 3 bulan yang belum imunisasi BCG,\n bayi yang kontak erat penderita TBC Aktif dan telah mendapat pengobatan profilasksis dan hasil uji tuberkulin negatif",
            "contraindication" => "Hasil uji tuberkulin >5 mm (positif), Kondisi gangguan sistem kekebalan tubuh, seperti HIV/AIDS, leukemia, dan limfoma,\nDemam tinggi,\nRiwayat infeksi TBC,\nRiwayat alergi terhadap vaksin BCG,\nHamil",
            "chase_immunization" => "BCG diberikan pada bayi baru lahir, yaitu saat bayi berusia 0-7 hari. BCG diberikan melalui suntikan",
            "KIPI" => "Bisul ditempat penyuntikan",
            "schedule" => "BCG diberikan pada bayi baru lahir, yaitu saat bayi berusia 0-7 hari sesegera mungkin sebelum bayi berusia 1 bulan. Jika berusia lebih dari 3 bulan perlu dilakukan uji tuberkulin dan akan diberikan jika hasilnya negatif. BCG diberikan melalui suntikan",
            "recommended_days" => 0,
        ],
        [
            "name" => "DPT-HB-Hib 1",
            "type" => "vaksin mati",
            "prevention" => "Mencegah penyakit difteri, pertusis, tetanus, hepatitis B, dan infeksi Haemophilus influenzae tipe b (Hib)",
            "indication" => "Bayi usia 2 bulan yang belum pernah mendapat vaksin DPT-HB-Hib",
            "contraindication" => "Riwayat anafilaksis setelah vaksinasi DPT-HB-Hib sebelumnya",
            "chase_immunization" => "DPT-HB-Hib diberikan pada bayi berusia 2 bulan, 3 bulan, dan 4 bulan. DPT-HB-Hib diberikan melalui suntikan",
            "KIPI" => "Demam, nyeri, kemerahan, dan bengkak di tempat suntikan",
            "schedule" => "DPT-HB-Hib diberikan pada bayi berusia 2 bulan, 3 bulan, dan 4 bulan. DPT-HB-Hib diberikan melalui suntikan",
            "recommended_days" => 60,
        ],
        [
            "name" => "DPT-HB-Hib 2",
            "type" => "vaksin mati",
            "prevention" => "Mencegah penyakit difteri, pertusis, tetanus, hepatitis B, dan infeksi Haemophilus influenzae tipe b (Hib)",
            "indication" => "Bayi usia 2 bulan yang belum pernah mendapat vaksin DPT-HB-Hib",
            "contraindication" => "Riwayat anafilaksis setelah vaksinasi DPT-HB-Hib sebelumnya",
            "chase_immunization" => "DPT-HB-Hib diberikan pada bayi berusia 2 bulan, 3 bulan, dan 4 bulan. DPT-HB-Hib diberikan melalui suntikan",
            "KIPI" => "Demam, nyeri, kemerahan, dan bengkak di tempat suntikan",
            "schedule" => "DPT-HB-Hib diberikan pada bayi berusia 2 bulan, 3 bulan, dan 4 bulan. DPT-HB-Hib diberikan melalui suntikan",
            "recommended_days" => 90,
        ],
        [
            "name" => "DPT-HB-Hib 3",
            "type" => "vaksin mati",
            "prevention" => "Mencegah penyakit difteri, pertusis, tetanus, hepatitis B, dan infeksi Haemophilus influenzae tipe b (Hib)",
            "indication" => "Bayi usia 2 bulan yang belum pernah mendapat vaksin DPT-HB-Hib",
            "contraindication" => "Riwayat anafilaksis setelah vaksinasi DPT-HB-Hib sebelumnya",
            "chase_immunization" => "DPT-HB-Hib diberikan pada bayi berusia 2 bulan, 3 bulan, dan 4 bulan. DPT-HB-Hib diberikan melalui suntikan",
            "KIPI" => "Demam, nyeri, kemerahan, dan bengkak di tempat suntikan",
            "schedule" => "DPT-HB-Hib diberikan pada bayi berusia 2 bulan, 3 bulan, dan 4 bulan. DPT-HB-Hib diberikan melalui suntikan",
            "recommended_days" => 120,
        ],
        [
            "name" => "DPT-HB-Hib Booster",
            "type" => "vaksin mati",
            "prevention" => "Mencegah penyakit difteri, pertusis, tetanus, hepatitis B, dan infeksi Haemophilus influenzae tipe b (Hib)",
            "indication" => "Bayi usia 2 bulan yang belum pernah mendapat vaksin DPT-HB-Hib",
            "contraindication" => "Riwayat anafilaksis setelah vaksinasi DPT-HB-Hib sebelumnya",
            "chase_immunization" => "DPT-HB-Hib diberikan pada bayi berusia 2 bulan, 3 bulan, dan 4 bulan. DPT-HB-Hib diberikan melalui suntikan",
            "KIPI" => "Demam, nyeri, kemerahan, dan bengkak di tempat suntikan",
            "schedule" => "DPT-HB-Hib diberikan pada bayi berusia 2 bulan, 3 bulan, dan 4 bulan. DPT-HB-Hib diberikan melalui suntikan",
            "recommended_days" => 540,
        ],
        [
            "name" => "Rotavirus 1",
            "type" => "vaksin hidup",
            "prevention" => "Mencegah penyakit diare yang disebabkan oleh rotavirus",
            "indication" => "Bayi usia 6 minggu sampai 14 minggu yang belum pernah mendapat vaksin rotavirus",
            "contraindication" => "Riwayat anafilaksis setelah vaksinasi rotavirus sebelumnya",
            "chase_immunization" => "Rotavirus diberikan pada bayi berusia 6 minggu, 10 minggu, dan 14 minggu. Rotavirus diberikan melalui mulut",
            "KIPI" => "Demam, muntah, diare, dan ruam kulit",
            "schedule" => "Rotavirus diberikan pada bayi berusia 6 minggu, 10 minggu, dan 14 minggu. Rotavirus diberikan melalui mulut",    
            "recommended_days" => 42,
        ],
        [
            "name" => "Rotavirus 2",
            "type" => "vaksin hidup",
            "prevention" => "Mencegah penyakit diare yang disebabkan oleh rotavirus",
            "indication" => "Bayi usia 6 minggu sampai 14 minggu yang belum pernah mendapat vaksin rotavirus",
            "contraindication" => "Riwayat anafilaksis setelah vaksinasi rotavirus sebelumnya",
            "chase_immunization" => "Rotavirus diberikan pada bayi berusia 6 minggu, 10 minggu, dan 14 minggu. Rotavirus diberikan melalui mulut",
            "KIPI" => "Demam, muntah, diare, dan ruam kulit",
            "schedule" => "Rotavirus diberikan pada bayi berusia 6 minggu, 10 minggu, dan 14 minggu. Rotavirus diberikan melalui mulut",
            "recommended_days" => 70,
        ],
        [
            "name" => "Rotavirus 3",
            "type" => "vaksin hidup",
            "prevention" => "Mencegah penyakit diare yang disebabkan oleh rotavirus",
            "indication" => "Bayi usia 6 minggu sampai 14 minggu yang belum pernah mendapat vaksin rotavirus",
            "contraindication" => "Riwayat anafilaksis setelah vaksinasi rotavirus sebelumnya",
            "chase_immunization" => "Rotavirus diberikan pada bayi berusia 6 minggu, 10 minggu, dan 14 minggu. Rotavirus diberikan melalui mulut",
            "KIPI" => "Demam, muntah, diare, dan ruam kulit",
            "schedule" => "Rotavirus diberikan pada bayi berusia 6 minggu, 10 minggu, dan 14 minggu. Rotavirus diberikan melalui mulut",
            "recommended_days" => 98,
        ],
        [
            "name" => "Pneumokokus 1",
            "type" => "vaksin mati",
            "prevention" => "Mencegah penyakit pneumonia, otitis media, dan meningitis yang disebabkan oleh bakteri pneumokokus",
            "indication" => "Bayi usia 2 bulan sampai 6 bulan yang belum pernah mendapat vaksin pneumokokus",
            "contraindication" => "Riwayat anafilaksis setelah vaksinasi pneumokokus sebelumnya",
            "chase_immunization" => "Pneumokokus diberikan pada bayi berusia 2 bulan, 3 bulan, dan 4 bulan. Pneumokokus diberikan melalui suntikan",
            "KIPI" => "Nyeri, kemerahan, dan bengkak di tempat suntikan,\nRewel, demam, dan diare",
            "schedule" => "Pneumokokus diberikan pada bayi berusia 2 bulan, 3 bulan, dan 4 bulan. Pneumokokus diberikan melalui suntikan",
            "recommended_days" => 60,
        ],
        [
            "name" => "Pneumokokus 2",
            "type" => "vaksin mati",
            "prevention" => "Mencegah penyakit pneumonia, otitis media, dan meningitis yang disebabkan oleh bakteri pneumokokus",
            "indication" => "Bayi usia 2 bulan sampai 6 bulan yang belum pernah mendapat vaksin pneumokokus",
            "contraindication" => "Riwayat anafilaksis setelah vaksinasi pneumokokus sebelumnya",
            "chase_immunization" => "Pneumokokus diberikan pada bayi berusia 2 bulan, 3 bulan, dan 4 bulan. Pneumokokus diberikan melalui suntikan",
            "KIPI" => "Nyeri, kemerahan, dan bengkak di tempat suntikan,\nRewel, demam, dan diare",
            "schedule" => "Pneumokokus diberikan pada bayi berusia 2 bulan, 3 bulan, dan 4 bulan. Pneumokokus diberikan melalui suntikan",
            "recommended_days" => 90,
        ],
        [
            "name" => "Pneumokokus 3",
            "type" => "vaksin mati",
            "prevention" => "Mencegah penyakit pneumonia, otitis media, dan meningitis yang disebabkan oleh bakteri pneumokokus",
            "indication" => "Bayi usia 2 bulan sampai 6 bulan yang belum pernah mendapat vaksin pneumokokus",
            "contraindication" => "Riwayat anafilaksis setelah vaksinasi pneumokokus sebelumnya",
            "chase_immunization" => "Pneumokokus diberikan pada bayi berusia 2 bulan, 3 bulan, dan 4 bulan. Pneumokokus diberikan melalui suntikan",
            "KIPI" => "Nyeri, kemerahan, dan bengkak di tempat suntikan,\nRewel, demam, dan diare",
            "schedule" => "Pneumokokus diberikan pada bayi berusia 2 bulan, 3 bulan, dan 4 bulan. Pneumokokus diberikan melalui suntikan",
            "recommended_days" => 120,
        ],
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        foreach ($this->immunizations as $immunization) {
            \App\Models\Immunization::create($immunization);
        }
    }
}