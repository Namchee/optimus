# PANDUNG PENGERJAAN PROYEK

## Persiapan

1. Install Dependency (`npm install`)
2. Letakkan _file_ `.env` yang sudah diberikan di _root_ folder
3. Jalankan `npm run dev` untuk memulai _development server_ (baca _log_ untuk mengetahui server listen di port berapa)
4. Test _endpoint_ bagian anda menggunakan HTTP client seperti Postman, Insomnia, atau cURL
5. Happy ~~coding~~ developing~

## Daftar _Endpoint_ yang Harus Dikerjakan

Berikut merupakan daftar _endpoint_ yang akan dikerjakan beserta _mapping_ URL pada aplikasi untuk testing

1. POST /api/Booking/CreateSession -> /api/booking/create_session

2. POST /api/Booking/CancelSession -> /api/booking/cancel_session

3. GET /api/ticketing/availableTickets/{BookingSessionId} -> /api/ticketing/available_tickets/:id

4. POST /api/ticketing/selectTickets -> /api/ticketing/select_tickets

5. GET /api/seating/getLayout/{bookingSessionId} -> /api/seating/get_layout/:id

6. POST /api/Seating/SelectSeats -> /api/seating/select_seats

7. POST /api/Booking/Complete -> /api/booking/complete

8. ~~GET /api/Orders/Summary/{externalOrderId}~~ (duplikat)

9. GET /api/Orders/BookingSession/{bookingSessionId} -> /api/orders/booking_session/:id

Catatan: Seluruh dokumentasi _endpoint_ __SUDAH ADA__ di `docs/swagger.json`

## Header dan Token (memang public)

|                 | Prospector                   | RTSDemo                      | CinemaWest                   | BandBTheathers                   | ShowcaseUS                       |
|-----------------|------------------------------|------------------------------|------------------------------|----------------------------------|----------------------------------|
| Exhibitor-Code  | Prospector                   | RTSDemo                      | CinemaWest                   | BandBTheaters                    | ShowcaseUS                       |
| X-Authorization | vSD45gbEgd5ggevbxjhg4655bvE= | RGV2Q2xpZW50MTpwYSQkdzByZA== | RGV2Q2xpZW50MTpwYSQkdzByZA== | YmJ0aGVhdGVyczpjaW5lbWFzdHVmZg== | c2hvd2Nhc2V1czpjaW5lbWFzdHVmZg== |

## Catatan Lain

1. Gunakan [convential commit](https://www.conventionalcommits.org/en/v1.0.0/)
2. JANGAN melawan _linter_, install plugin eslint pada Visual Studio Code anda.
3. Gunakan `require()` untuk meng-_import_ modul, JANGAN gunakan `import`
4. Dokumentasi harus ditulis dalam bahasa inggris