export default function artikel () {
    return (
        <div>
            <judul>
                
            </judul>
            <Penulis
              nama="Muhammad Yudha"
              universitas="Politeknik Caltex Riau" />
            <Greeting/>
            <Gambar/>
            <Isiartikel/>
            
        </div>
       
    )
}

function Penulis (props){
    return (
        <div>
            <hr/>
            <b>
            <div><h8>{props.nama}</h8></div>
            <div><h8>{props.universitas}</h8></div>
                </b>
            

            
           
        </div>
            
    )
}
function Greeting () {
    return (
        <small>
            Artikel
            </small>
        

    )
} 

function Gambar () {
    return (
        <center><img src="img/sampah1.jpg" alt="gambar artikel" width="400" height="200" /></center>
        
        
        

    )
} 
function Isiartikel() {
    return (
        
        <div>
            <hr/>
<b>I. Pendahuluan</b> 
<p>
Masalah lingkungan kini semakin kompleks akibat pembangunan, pertumbuhan penduduk, teknologi, dan pola konsumsi. 
Pertumbuhan penduduk meningkatkan kebutuhan lahan, pangan, dan energi, yang berdampak negatif pada lingkungan. 
Aktivitas manusia, seperti penebangan hutan, mempengaruhi iklim dan menyebabkan bencana seperti banjir.
Indonesia, sebagai negara berpenduduk padat, menghasilkan sekitar 200.000 ton sampah per hari dan menjadi penyumbang sampah plastik terbesar kedua di lautan. 
Kota-kota besar seperti Makassar menghadapi tantangan serius dalam pengelolaan sampah yang terus meningkat.
Dalam konteks agama, kebersihan dianggap bagian dari iman, menekankan pentingnya menjaga kebersihan lingkungan.
 U No. 18 tahun 2008 mendefinisikan sampah sebagai sisa aktivitas manusia dan alam, memerlukan pengelolaan yang strategis.
Baca artikel detikjateng, "6+ Contoh Artikel Ilmiah dengan Struktur yang Benar untuk Tugas Kuliah"
</p>

<b>II. Pembahasan</b>
<p>
Sampah adalah materi tidak diinginkan yang dihasilkan dari aktivitas manusia atau proses alam.
Menurut UU No. 18 tahun 2008, sampah mencakup limbah padat dari bahan organik dan anorganik.Sampah dapat menyebabkan pencemaran lingkungan dan berasal dari berbagai sumber seperti rumah tangga, pasar, kegiatan komersial, fasilitas umum, dan industri. Pengelolaannya penting untuk mencegah dampak negatif pada lingkungan dan mendukung pembangunan berkelanjutan.
Baca artikel detikjateng, "6+ Contoh Artikel Ilmiah dengan Struktur yang Benar untuk Tugas Kuliah" selengkapnya https://www.detik.com/jateng/berita/d-7361884/6-contoh-artikel-ilmiah-dengan-struktur-yang-benar-untuk-tugas-kuliah.
</p>

<b>A. Kebijakan Pengelolaan Sampah</b>
<p>
Permasalahan sampah terkait erat dengan paradigma manusia dan masyarakat. 
Secara tradisional, sampah dipandang sebagai sesuatu yang tidak bernilai dan dibuang sembarangan
yang dianggap merugikan karena memerlukan waktu, tenaga, dan uang untuk Mengelolanya
Menurut Setyo Purwendo dan Nurhidayat, masalah sampah juga terkait dengan budaya masyarakat yang kurang disiplin dan kebijakan pemerintah yang lemah.
Undang-Undang Nomor 18 Tahun 2008 menekankan pentingnya pengelolaan sampah yang komprehensif dari hulu ke hilir untuk mengubah perilaku masyarakat.
Undang-undang ini menyatakan bahwa pengelolaan sampah harus dilakukan secara sistematis, menyeluruh, dan berkesinambungan,
meliputi pengurangan dan penanganan sampah.
 </p>

 <b>
    B. Model Pengelolaan Sampah:
    </b>
    <p>
    1. Model Urugan: Sampah dibuang di lembah atau cekungan tanpa perlakuan lanjut.
    2. Model Tumpukan: Dilengkapi dengan unit saluran air dan pengelolaan gas metan.
    </p>
    <p><b>Konsep Pengelolaan Sampah:</b></p>
<p>
1. Hierarki Sampah (3M): Mengurangi, menggunakan kembali, dan mendaur ulang sampah.<br></br>
2. Perpanjangan Tanggung Jawab Penghasil Sampah (EPR): Produsen bertanggung jawab atas seluruh siklus hidup produk.<br></br>
3. Prinsip Pengotor Membayar: Pencemar membayar dampak aktivitasnya terhadap lingkungan.
</p>
Pengelolaan sampah di Indonesia mengikuti prinsip 3R (reduce, reuse, recycle) yang bertujuan mengurangi volume sampah di TPS dan TPA, serta mencegah pencemaran lingkungan dan masalah kesehatan.

        </div>
    )
}
