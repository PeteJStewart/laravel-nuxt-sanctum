describe('/login', () => {
  beforeEach(() => {
    cy.server()

    /**
     * If the sanctum cookie route is stubbed, the tests fails,
     * but otherwise it works.
     */
    // cy.route({
    //   method: 'GET',
    //   url: '/sanctum/csrf-cookie',
    //   status: 204,
    //   response: '',
    //   headers: {
    //     'host': '127.0.0.1:8000',
    //     'cache-control': 'no-cache, private',
    //     'access-control-allow-origin': 'http://127.0.0.1:3000',
    //     'vary': 'Origin, Accept-Encoding',
    //     'access-control-allow-credentials': true,
    //     'Set-Cookie': 'XSRF-TOKEN=eyJpdiI6IjdKZURoT1RtRXlRaFZocTdwc2swNEE9PSIsInZhbHVlIjoiS1lBZDZFd1gvN1J5Z3NiUVhpNFhnMHpNYkRzWFNWTlU1SHJqQWoyUFBlcDdVVWRkOTQ0QnFJcUduMFBiM01WNyIsIm1hYyI6IjYyMGViMGY5OTE2ODhmNDFlOTE0NjQ5MGM1NjA3ODgyMWM3YWI4ZWY1NjU4ZDVjODdkMTI0MDEwODkyZjU2ODYifQ%3D%3D; expires=Thu, 12-Nov-2020 15:23:34 GMT; Max-Age=7200; path=/; domain=127.0.0.1; samesite=lax',
    //     'Set-Cookie': 'laravel_session=eyJpdiI6ImVyWFhTd01ZYm1PWmMzM0I1dVZYa1E9PSIsInZhbHVlIjoiSERpNjJMeVFPaGhOVFdFYk51ZTBUOVc1clAzUHY3YnZqY09qTlNyVkVSRGVJM29iMTczZ3FMS1VsUFZOY0JLeCIsIm1hYyI6IjRmY2JmYWFkZTVjMTUyODNiYWU5N2MxMjFiZGNiYTM2Y2ZmZGM4YjZkN2Q5Njc1MTQ2OWQ4OWZiMGJjY2Y0YjUifQ%3D%3D; expires=Thu, 12-Nov-2020 15:23:34 GMT; Max-Age=7200; path=/; domain=127.0.0.1; httponly; samesite=lax',
    //     'Set-Cookie': 'OiEPXWnZGTyRat29Kp8uD7ekGHwafRo59jOSZEdz=eyJpdiI6IllzSmZJUHlicjBwYm1UYjZGS2dzWmc9PSIsInZhbHVlIjoiRFpORlh5TzcydVZlRFQ4bytTVjh3eTcxSEpralFTbmlxV29oNHBxV3FUNVU0RnhHdG9xUlpULzlpZTFtNTFJTDg1QkRiOFFubmxMMi9FemJoZlBYR2VuNTAzMnVQYXBGc1JmRnAxUzdHSUg4MXJWbzhzSGdzRytLSWpXeEdOaW8xQnBxNkNUN0FIVWJreitvMmVKaHg3M0Y3c1BCaklLeHF6b0JOd0QxdWQxSGR1TzR6cDdDdXBqSjlXd3dzQnMweldDbXAwWngyb1g3MlVhSTR1MXd6TlhINGNWUHA0b1c5ZHQ5SjQydkZpYz0iLCJtYWMiOiI4MjdjZTk2MzdmMTA0YmM0ODNjYWYxZTM0MDBlNTJhNTY1NTVkYzFlNjFhZTU2YjViN2I3MmIzNjljZTBhOWNlIn0%3D; expires=Thu, 12-Nov-2020 15:23:34 GMT; Max-Age=7200; path=/; domain=127.0.0.1; httponly; samesite=lax',
    //     'Connection': 'keep-alive',
    //   },
    // })

    cy.route({
      method: 'POST',
      url: '/login',
      status: 204,
      response: '',
      headers: {
        'host': '127.0.0.1:8000',
        'cache-control': 'no-cache, private',
        'access-control-allow-origin': 'http://127.0.0.1:3000',
        'vary': 'Origin',
        'access-control-allow-credentials': true,
        'Set-Cookie': 'XSRF-TOKEN=eyJpdiI6IkZUbzltZmQ4L2dsaTJVaDducjJYZ0E9PSIsInZhbHVlIjoiNkhtK1ROQ2JBTXRONHZtNnlCaWdmb3NkYWFBOTVZdHQrYkJjNktodlgvbk5qQW9oQmhZZUwzbnBNNjRGcVF5aiIsIm1hYyI6IjM4Nzg3MWRjNjU5MjE0ODM3ODQ4NDJkMzkwNTg2N2E3MTJlYmUxOWU0ZmJkZmY1YjNiNTkwNDBkOTYxNjc4YzIifQ%3D%3D; expires=Thu, 12-Nov-2020 14:51:54 GMT; Max-Age=7200; path=/; domain=127.0.0.1; samesite=lax',
        'Set-Cookie': 'laravel_session=eyJpdiI6Ii9nNFk4WE1UY1RwLzhDSmRvK2c1Z0E9PSIsInZhbHVlIjoicFdVRTBIYTRPNEd3cHZSbnpQeXdObUt5ak9pQVZEVUx5MXM1ZVV1cXlRYWY4ck5oSnAxZ0JlaDZVUTJCRnQ2NCIsIm1hYyI6IjE4ZGMwMzQwZTJiMmY1MzExMzI3YWUzMzkzMDU3YTFhOWIyODZiZmJjNzQ5YTc2MDk1ZDE2MDZiMDBhZWQ2YWQifQ%3D%3D; expires=Thu, 12-Nov-2020 14:51:54 GMT; Max-Age=7200; path=/; domain=127.0.0.1; httponly; samesite=lax',
        'Set-Cookie': 'KBRczZFLsrowtziLruACmSdkXCmqaqgUT5Ia84jG=eyJpdiI6IjNLVDdWRXJEUGtPVTB1My94RHNNalE9PSIsInZhbHVlIjoic2J5Vmg4d2ZyZ3hNRWdtanpPTGxYdz09IiwibWFjIjoiMzI1NTg1YTZkODgwY2VmNmQ1ZjNkZDQ5YmUwYTYyZmUxZWE2ODc2MzBmODc5MDUwODhiNzBjNDFjMzNjNWZhZSJ9; expires=Sat, 14-Nov-2015 12:51:54 GMT; Max-Age=0; path=/; domain=127.0.0.1; httponly; samesite=lax',
        'Set-Cookie': '7eRLaOpqjpOlpTxsonBecPuUaVBBbPaDQHHi11Gw=eyJpdiI6InE0Mk9kcW5uYmVWbUxQd2lBZTBwYUE9PSIsInZhbHVlIjoiMlpZbWNtRVBva1ptU2tBdHc4RTVWL1N3bDlKN0tDaXpqaTEzY21oRFlQbHl3UDFTcTBNZXlPTHdnVGxtR3gyQnR1SURCMGw3aEdTUEVMb0hHdTNhVjRKSnBSR3B3OWxCR2orK29RWm43MHVnRGFtOFZ2aXJmcGNHZVRKOFN0bGZaZ2R5SUdXM0NEeHYvOGZwc3J6OTU1dXNNczU5ek1YbTNqUHI3MVNOOVhMOE1ONDhNbS9tN3o2aE9SanRVRXl5WE44L2c0VTlOSnBNMHdOQzBvSThNSW5kRlRSY0h3WW5McXdPZ0EvdVpld3NFY09MMU8zMm1vWll5VW5oZlZaYlFwMFpNdVZRaXozK3dtcUt2SzZ4RGZDYytDWXFSWk1kNHpmSHR3QmpFd1ZKbVBIOVpQWWFFM2N1eUUwWCtucUsiLCJtYWMiOiIxMWFhMjZjNDU4ZTViYjg2YzUwMWY2YzFlMTVhMGM4NjYxOGFjOGUzYmEyODViY2ExYWE0NGU5YmQwMzhiN2E4In0%3D; expires=Thu, 12-Nov-2020 14:51:54 GMT; Max-Age=7200; path=/; domain=127.0.0.1; httponly; samesite=lax',
        'Connection': 'keep-alive',
      },
    })

    cy.route({
      method: 'GET',
      url: '/api/user',
      status: 200,
      response: {
        "id":1,
        "name":"Norwood Osinski",
        "email":"admin@admin.com",
        "email_verified_at":"2020-11-12T11:16:36.000000Z",
        "created_at":"2020-11-12T11:16:36.000000Z",
        "updated_at":"2020-11-12T11:16:36.000000Z"
      },
      headers: {
        'host': '127.0.0.1:8000',
        'cache-control': 'no-cache, private',
        'access-control-allow-origin': 'http://127.0.0.1:3000',
        'vary': 'Origin, Accept-Encoding',
        'access-control-allow-credentials': true,
        'Set-Cookie': 'XSRF-TOKEN=eyJpdiI6InRUSm1MMHF4cklXek5vMDlleEZMdHc9PSIsInZhbHVlIjoiRGVTVEN1MlJJRnB6eDd0eVd0bFNFNzVIRk00N0dZQ0xIRC9rTktnZGtSVnJyVTNtY2xxbXNOS2JKSm5jVnc2UyIsIm1hYyI6IjgwYTc4MzlkNGY2ZjdkNTcwNjg3NTcyYjk3ZTk5MGQwZDE5ZjU2YTkzNTIwMDViYmI4OGQzOTRjOWRhZGQ4ZmIifQ%3D%3D; expires=Thu, 12-Nov-2020 14:51:54 GMT; Max-Age=7200; path=/; domain=127.0.0.1; samesite=lax',
        'Set-Cookie': 'laravel_session=eyJpdiI6InhtR3JHaHNhclg5OHh4azVGSiszQUE9PSIsInZhbHVlIjoiQWtJZnVjUW9PKzZrNFRTQjgwZ1JMbWNZZWxhZXdIUSt0SmJnTjd4LzUwM0ZGdVpnVVVSa2ZVUnpsK2tSMkFDcCIsIm1hYyI6Ijg5ZjllNTE3NWNiZGQ5ZDEwZTVkYWFlZjIxMTNiODNiNGU5ZGEyZmIwN2MwODg0MjVkMWM4Mzk4OTEyYjVhZjAifQ%3D%3D; expires=Thu, 12-Nov-2020 14:51:54 GMT; Max-Age=7200; path=/; domain=127.0.0.1; httponly; samesite=lax',
        'Set-Cookie': 'KBRczZFLsrowtziLruACmSdkXCmqaqgUT5Ia84jG=eyJpdiI6IlMzdzUydTZ6YXoxQ0htODdKdEUxNVE9PSIsInZhbHVlIjoiRk5XTVFtbWJob3dnNjNhbTVVMmtGY3JoUTVrektvWXZpQ0JUa0pEVk5uNlZZUGJORmY4UUZhcDh5STdncmhxU3hxWEtMb2U4NlFBbkVuNVgxMEhuODVKVjI1WEYwVFNUSFdMQ1JtSVdCNUwvM3l2TlMxZisxSWx6ODNHZDY0OThSKzN5YXJvOTUvTjZXQjcyTHhuK1BvQ2REblZ0T1NQejV2MG9SUnI5ajVVdWM4M0RRcUNVVkRFVWYwUWV0UzdLQXo5ZFJ4YngxMjN2MytGRXBsUGprdkV0bll6N1A0OUxJVWxvcitQN2RWbz0iLCJtYWMiOiIxNzNiNzRkMzExZGQ2ZjljZDE3OTIyYjM0ZmYwNWVhZGRkZjM3Njg0ZTI4MzJhOWE4Nzg3YjJlM2RjNDcwMmFkIn0%3D; expires=Thu, 12-Nov-2020 14:51:54 GMT; Max-Age=7200; path=/; domain=127.0.0.1; httponly; samesite=lax',
        'Connection': 'keep-alive',
      },
    })

    cy.visit('/login')
  })

  it('Admin user can login', () => {
    cy.get('[data-test=email]').type('admin@admin.com')
    cy.get('[data-test=password]').type('123456{enter}')
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
})
