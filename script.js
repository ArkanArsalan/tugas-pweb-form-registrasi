const mataKuliah = [
    "Aljabar Linier",
    "Aplikasi Teknologi dan Transformasi Digital",
    "Dasar Pemrograman",
    "Etika Profesi",
    "Grafika Komputer",
    "Interaksi Manusia dan Komputer",
    "Jaringan Komputer",
    "Kalkulus 1",
    "Kalkulus 2",
    "Keamanan Informasi",
    "Kerja Praktik",
    "Kewirausahaan Berbasis Teknologi",
    "Komputasi Numerik",
    "Konsep Kecerdasan Artifisial",
    "Konsep Pengembangan Perangkat Lunak",
    "Manajemen Basis Data",
    "Mata Kuliah Pengayaan",
    "Matematika Diskrit",
    "Organisasi Komputer",
    "Otomata",
    "Pembelajaran Mesin",
    "Pemodelan dan Simulasi",
    "Pemrograman Berbasis Kerangka Kerja",
    "Pemrograman Berorientasi Objek",
    "Pemrograman Jaringan",
    "Pemrograman Perangkat Bergerak",
    "Pemrograman Web",
    "Pengenalan Teknologi Elektro dan Informatika Cerdas",
    "Perancangan Perangkat Lunak",
    "Perancangan dan Analisis Algoritma",
    "Pra-Tugas Akhir",
    "Probabilitas dan Statistik",
    "Rekayasa Sistem Berbasis Pengetahuan",
    "Sistem Basis Data",
    "Sistem Digital",
    "Sistem Operasi",
    "Struktur Data",
    "Teori Graf",
    "Tugas Akhir"
];

const dosen = [
    "Ir. Siti Rochimah, MT., Ph.D.",
    "Daniel Oranova Siahaan, S.Kom., M.Sc. PD.Eng.",
    "Sarwosri, S.Kom., MT.",
    "Dr. Umi Laili Yuhana S.Kom., M.Sc.",
    "Rizky Januar Akbar, S.Kom., M.Eng.",
    "Prof. Tohari Ahmad, S.Kom., M.IT., Ph.D.",
    "Bagus Jati Santoso, S.Kom., Ph.D.",
    "Hudan Studiawan, S.Kom., M.Kom., Ph.D.",
    "Dr. Baskoro Adi P., S.Kom.,M.Kom.",
    "Ary Mazharuddin Shiddiqi, S.Kom., M.Comp.Sc., Ph.D",
    "Dr. Eng. Nanik Suciati, S.Kom., M.Kom.",
    "Prof. Dr. Eng. Chastine Fatichah, S.Kom., M.Kom.",
    "Prof. Ir. Handayani Tjandrasa, M.Sc., Ph.D.",
    "Prof. Dr. Agus Zainal Arifin, S.Kom., M.Kom.",
    "Dini Adni Navastara, S.Kom., M.Sc.",
    "Dr. Wahyu Suadi, S.Kom, M.Kom.",
    "Dr. Radityo Anggoro, S.Kom., M.Sc.",
    "Prof.Ir. Supeno Djanali, M.Sc Ph.D.",
    "Royyana Muslim Ijtihadie, S.Kom.,M.Kom., Ph.D",
    "Imam Kuswardayan, S.Kom., MT.",
    "Dr. Eng. Darlis Herumurti, S.Kom., M.Kom",
    "Dr. Anny Yuniarti, S.Kom., M.Comp.Sc.",
    "Wijayanti Nurul Khotimah, S.Kom., M.Sc.",
    "Hadziq Fabroyir, S.Kom., Ph.D.",
    "Siska Arifiani, S.Kom., M.Kom.",
    "Dr. Yudhi Purwananto, S.Kom., M.Kom.",
    "Dr. Diana Purwitasari, S.Kom., M.Sc.",
    "Ir. F.X. Arunanto, M.Sc.",
    "Rully Soelaiman, S.Kom,M.Kom.",
    "Dwi Sunaryono, S.Kom., M.Kom.",
    "Fajar Baskoro, S.Kom., MT.",
    "Misbakhul Munir Irfan Subakti, S.Kom., M.Sc.",
    "Agus Budi Raharjo, S.Kom., M.Kom., Ph.D.",
    "Prof. Drs. Ec. Ir. Riyanarto Sarno, M.Sc., Ph.D.",
    "Adhatus Solichah Ahmadiyah, S.Kom., M.Sc.",
    "Ratih Nur Esti Anggraini, S.Kom., M.Sc.,Ph.D.",
    "Nurul Fajrin Ariyani, S.Kom., M.Sc.",
    "Abdul Munif, S.Kom., M.Sc.",
    "Shintami Chusnul Hidayati, S.Kom., M.Sc., Ph.D",
    "Kelly Rossa Sungkono, S.Kom., M.Kom.",
    "Victor Hariadi, S.Si., M.Kom.",
    "Prof. Dr. Ir. Joko Lianto Buliali, M.Sc.",
    "Dr. Ahmad Saikhu, S.Si., MT.",
    "Dr. Bilqis Amaliah, S.Kom.,M.Kom.",
    "Arya Yudhi Wijaya, S.Kom, M.Kom."
];

const rekomendasiNama = [
    "Andi Susanto",
    "Dewi Kusuma",
    "Hendro Wijaya",
    "Linda Sari",
    "Budi Santoso",
    "Siti Rahayu",
    "Rudi Pranata",
    "Maya Utami",
    "Eko Prasetyo",
    "Anita Putri",
    "Arkan Arsalan",
    "Ardan",
    "Arlan"
  ];


function showSelectionMataKuliah() {
    const selectionMataKuliah = document.getElementById("mata-kuliah");

    for (let i = 0; i < mataKuliah.length; i++) {
        const option = document.createElement("option");
        option.textContent = mataKuliah[i];
        option.value = mataKuliah[i];
        selectionMataKuliah.append(option);
    }
}

function showSelectionDosen() {
    const selectionDosen = document.getElementById("dosen");

    for (let i = 0; i < dosen.length; i++) {
        const option = document.createElement("option");
        option.textContent = dosen[i];
        option.value = dosen[i];
        selectionDosen.append(option);
    }
}

function clearRecommendation() {
    const box = document.getElementById("recommendation");
    box.innerHTML = "";
}

function showRecommendationName() {
    clearRecommendation();
    const inputNama = document.getElementById("nama");
    const recomendationBox = document.getElementById("recommendation");

    const inputTextValue = inputNama.value.toLowerCase();
    const rekomendasi = rekomendasiNama.filter(nama => nama.toLowerCase().startsWith(inputTextValue));

    const newBoxRecommendationTitle = document.createElement("div");
    newBoxRecommendationTitle.textContent = "Rekomendasi nama:";
    newBoxRecommendationTitle.setAttribute("class", "recommendation-list-title");
    recomendationBox.appendChild(newBoxRecommendationTitle);
    
    for (let i = 0; i < rekomendasi.length; i++) {
        const newBoxChild = document.createElement("div");
        newBoxChild.setAttribute("class", "recommendation-list");
        newBoxChild.textContent = rekomendasi[i];
        recomendationBox.appendChild(newBoxChild)
    }
}

function formValidation() {
    const nameInput = document.getElementById("nama");
    const NRPInput = document.getElementById("NRP");
    const mataKuliahInput = document.getElementById("mata-kuliah");
    const dosenInput = document.getElementById("dosen");

    if (nameInput.value == "") {
        alert("Nama Tidak Boleh Kosong");
    }
    else if (NRPInput.value == "") {
        alert("NRP Tidak Boleh Kosong");
    }
    else if (mataKuliahInput.value == "") {
        alert("Mata Kuliah Tidak Boleh Kosong");
    }
    else if (dosenInput.selectedIndex < 1) {
        alert("Dosen Wali Tidak Boleh Kosong");
    }
    else {
        alert("Submit berhasil");
    }
}

document.getElementById("nama").addEventListener("input", showRecommendationName);
document.getElementById("NRP").addEventListener("click", clearRecommendation);
document.getElementById("mata-kuliah").addEventListener("click", showSelectionMataKuliah);
document.getElementById("mata-kuliah").addEventListener("click", clearRecommendation);
document.getElementById("dosen").addEventListener("click", showSelectionDosen);
document.getElementById("dosen").addEventListener("click", clearRecommendation);

  

