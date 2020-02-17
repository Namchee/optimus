# PANDUAN PENGERJAAN PROYEK

## Persiapan

1. Pull _repository_ ini (ya iyalah!)
2. Install Dependency (`npm install`)
3. Letakkan _file_ `.env` yang sudah diberikan di _root_ folder
4. Jalankan `npm run dev` untuk memulai _development server_ (baca _log_ untuk mengetahui server listen di port berapa)
5. Test _endpoint_ bagian anda menggunakan HTTP client seperti Postman, Insomnia, atau cURL
6. Happy ~~coding~~ developing~

## Daftar _Endpoint_ yang Harus Dikerjakan

Berikut merupakan daftar _endpoint_ yang akan dikerjakan beserta _mapping_ URL pada aplikasi untuk testing, beserta _asignee_ masing-masing

1. ~~POST /api/Booking/CreateSession -> /api/booking/create_session~~ -> Cristopher (done)

2. POST /api/Booking/CancelSession -> /api/booking/cancel_session

3. ~~GET /api/ticketing/availableTickets/{BookingSessionId} -> /api/ticketing/available_tickets/:id~~ -> Cristopher (done)

4. POST /api/ticketing/selectTickets -> /api/ticketing/select_tickets

5. GET /api/seating/getLayout/{bookingSessionId} -> /api/seating/get_layout/:id

6. POST /api/Seating/SelectSeats -> /api/seating/select_seats

7. POST /api/Booking/Complete -> /api/booking/complete

8. ~~GET /api/Orders/Summary/{externalOrderId}~~ (duplikat)

9. GET /api/Orders/BookingSession/{bookingSessionId} -> /api/orders/booking_session/:id

Catatan: Seluruh dokumentasi _endpoint_ __SUDAH ADA__ di `docs/swagger.json`
Buka file tersebut menggunakan [Swagger Editor](https://editor.swagger.io/)

## Header dan Token (memang public)

|                 | Prospector                   | RTSDemo                      | CinemaWest                   | BandBTheathers                   | ShowcaseUS                       |
|-----------------|------------------------------|------------------------------|------------------------------|----------------------------------|----------------------------------|
| Exhibitor-Code  | Prospector                   | RTSDemo                      | CinemaWest                   | BandBTheaters                    | ShowcaseUS                       |
| X-Authorization | vSD45gbEgd5ggevbxjhg4655bvE= | RGV2Q2xpZW50MTpwYSQkdzByZA== | RGV2Q2xpZW50MTpwYSQkdzByZA== | YmJ0aGVhdGVyczpjaW5lbWFzdHVmZg== | c2hvd2Nhc2V1czpjaW5lbWFzdHVmZg== |

## _Minor requirements_

1. Mengeluarkan _debug_ statement (menggunakan `bunyan`) dengan ketentuan sebagai berikut:
  
- Ketika sebuah fungsi dipanggil, keluarkan _debug_ statement dengan format berikut:

  ```js
  {
    'category': '...' // Kategori pada API
    'functionName': '...' // Nama fungsi
    'params': { ... } // Daftar parameter non-header
  }
  ```

- Ketika API terpanggil, keluarkan _debug_ statement yang berisi _status code_ dari respons API tidak peduli apakah permintaan berhasil atau gagal
  
2. Untuk keperluan _development_, kirimkan respons dengan format sebagai berikut:

  ```js
  {
    'data': { ... } // Hasil data dari API, bila respons sukses
    'error': '...' // Error bila gagal
  }
  ```

  Catatan: Isi _field_ lain yang tidak diisi dengan `null`. Contoh: Apabila permintaan berhasil
  isi `data` dengan kembalian dari API dan `error` dengan `null`

## Catatan Lain

1. Gunakan [convential commit](https://www.conventionalcommits.org/en/v1.0.0/)
2. JANGAN melawan _linter_, install plugin eslint pada Visual Studio Code anda.
3. Gunakan `require()` untuk meng-_import_ modul, JANGAN gunakan `import`
4. Dokumentasi harus ditulis dalam bahasa inggris
5. Gunakan `async/await` untuk menangani `Promise`
6. Gunakan PascalCase untuk nama _file_ dan camelCase untuk hal lainnya
7. Apabila ada pertanyaan, buatlah _issue_ baru di GitHub
8. Setelah _feature_ selesai diimplementasi, buatlah _branch_ baru dan lakukan _pull request_ ke branch `master`
