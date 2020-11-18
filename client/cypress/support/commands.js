// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
  cy.request({
    method: 'GET',
    url: 'http://127.0.0.1:8000/sanctum/csrf-cookie',
  }).then(() => {
    cy.request({
      method: 'POST',
      url: 'http://127.0.0.1:8000/login',
      body: {
        email,
        password
      }
    }).then((res) => {
      cy.log(res)
    })
  })
})

Cypress.Commands.add("sanctumLogin", () => {
  cy.server()
  cy.route('GET', '/api/user', 'fixture:user')


  cy.setCookie(
    'O2U7r23Ax4cDeH1qYzXU3WauQmteDsXUXd12o7X9',
    'eyJpdiI6IjJ0RjBGdlpYelR0SERkNFVkdGRPTFE9PSIsInZhbHVlIjoiNFNONmtGaVlQcldHaGZzSG1HeE1YVk1Kc255T1J5akRvU3kvc2s4SHdMTDhTQk1PbEVQWXBVenlKSkE2VG1HMVNFNEIwWXl3aEJLY0hIdjZPT3V0YmZ3RzhyUC8wNHVCZlkwS3RXZnFxRXdGcTNJZ05zNHFMSTQ3cDhDNlNOb2YrRkcxMXE0VnBkcGhmQW9ZSW9iRnBvL3BUaVA3WXNoaGJNd25xb2FsdGFHRWhzeUQrV3REM0ZVS3lZMk9YSUlOVm5HUHZFRzZWVXpINTlCb0pjdkdUWU5ZajJiMzkwd1JGbkZNa2RsYktBZnUvTmtOVnc1QVpxWm1nRmJhaDF0OGwwZUtNSitaeE5mbEFhZ2FkOUZZa3hXeXRjb1puRkY5UUViN3BEcFU0d0toYUdwZWZrUGFwcTNrd2dHYjJKbEIiLCJtYWMiOiIyZjc3MmI2NmI0MGFmODU5YzdjZGM2ODk0NTBiOTY5NTk3NjcyM2JlNTAxMDllMzc5MDNkNmUwYjdhNWI5YzhmIn0%3D'
  )

  cy.setCookie(
    'laravel_session',
    'eyJpdiI6Ik5PUTE1TjZRV21NZHJIRVV2eGl5TFE9PSIsInZhbHVlIjoiZEY5Qk9oR00ycDhIb1pBblg1RGFqS3pKcGkrNDQvZTkyd2hISlhwQy9saE01Tm5qTk4zU25oT0NKYnFiWlI5ZCIsIm1hYyI6IjU3Y2Q4MTE3OWQ1ZDE0ZjU4ZDYwZjA5ODY4ZTA3YTM1ODZmMWZhYWE2ZDU5OTQyOWY0NTNmNjA5YWE4NGZhOTIifQ%3D%3D'
  )

  cy.setCookie(
    'XSRF-TOKEN',
    'eyJpdiI6ImVRR3k4dGQyM091THdSSXV4NFJwRlE9PSIsInZhbHVlIjoiMjBUaExleFljNjhMc21MMC94ekt1bGFqMzd0cldMVC9HYk1FN3RONzNMQWc2N2lObkovTlpkbmtlbVU5d1V3QyIsIm1hYyI6ImI0Mjc5NjE1OTFhY2E0MjFhNjkzMDgwNTg1NDQ3ZTFhOTIxODM5MjM1M2QyNTI2ZDA1ODMzZWRmYTI0OTUwMmUifQ%3D%3D'
  )

  cy.setCookie('auth.strategy', 'laravelSanctum')

  cy.setCookie('auth._token.laravelSanctum', '204')


})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
