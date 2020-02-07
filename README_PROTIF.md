# PANDUNG PENGERJAAN PROYEK

## Persiapan

1. Install Dependency (`npm install`)

TBC~

## Daftar _Endpoint_ yang Harus Dikerjakan

1. POST /api/Booking/CreateSession

2. POST /api/Booking/CancelSession

3. GET /api/ticketing/availableTickets/{BookingSessionId}

4. POST /api/ticketing/selectTickets

5. GET /api/seating/getLayout/{bookingSessionId}

6. POST /api/Seating/SelectSeats

7. POST /api/Booking/Complete

8. GET /api/Orders/Summary/{externalOrderId}

9. GET api/Orders/BookingSession/{bookingSessionId}

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