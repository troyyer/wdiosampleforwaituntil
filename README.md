i have 3 tests running and the test named "tests dynamic loading length to function" always fails for me
this is the terminal logs from my last run from the step prior to the failure

```
[0-0] 2024-01-14T09:08:39.301Z INFO webdriver: DATA { using: 'xpath', value: '//*[@id="start"]/button' }
[0-0] 2024-01-14T09:08:39.308Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': 'E0BF813FD5C0ABDB4E54EC073966E989_element_34'
[0-0] }
[0-0] 2024-01-14T09:08:39.310Z INFO webdriver: COMMAND elementClick("E0BF813FD5C0ABDB4E54EC073966E989_element_34")
[0-0] 2024-01-14T09:08:39.310Z INFO webdriver: [POST] http://0.0.0.0:53916/session/05f68f0b7876db5aec7bfdadc32609b8/element/E0BF813FD5C0ABDB4E54EC073966E989_element_34/click
[0-0] 2024-01-14T09:08:39.334Z INFO webdriver: RESULT null
[0-0] 2024-01-14T09:08:39.334Z INFO webdriver: COMMAND findElements("css selector", "#finish")
[0-0] 2024-01-14T09:08:39.335Z INFO webdriver: [POST] http://0.0.0.0:53916/session/05f68f0b7876db5aec7bfdadc32609b8/elements
[0-0] 2024-01-14T09:08:39.335Z INFO webdriver: DATA { using: 'css selector', value: '#finish' }
[0-0] 2024-01-14T09:08:39.341Z INFO webdriver: RESULT []
[0-0] Error in "dynamic loading.tests dynamic loading length to function "
Error: expected the array to have some records
    at async LoginPage.waitUntilArrayNotEmpty (C:\code\sample\test\pageobjects\login.page.js:17:3)
    at async Context.<anonymous> (C:\code\sample\test\specs\test.e2e.js:34:5)
[0-0] 2024-01-14T09:08:54.360Z INFO webdriver: COMMAND deleteSession()
[0-0] 2024-01-14T09:08:54.361Z INFO webdriver: [DELETE] http://0.0.0.0:53916/session/05f68f0b7876db5aec7bfdadc32609b8
[0-0] 2024-01-14T09:08:54.470Z INFO webdriver: RESULT null
 "spec" Reporter:
------------------------------------------------------------------
[chrome 120.0.6099.130 windows #0-0] Running: chrome (v120.0.6099.130) on windows
[chrome 120.0.6099.130 windows #0-0] Session ID: 05f68f0b7876db5aec7bfdadc32609b8
[chrome 120.0.6099.130 windows #0-0]
[chrome 120.0.6099.130 windows #0-0] » \test\specs\test.e2e.js
[chrome 120.0.6099.130 windows #0-0] dynamic loading
[chrome 120.0.6099.130 windows #0-0]    ✓ tests dynamic loading
[chrome 120.0.6099.130 windows #0-0]    ✓ tests dynamic loading length
[chrome 120.0.6099.130 windows #0-0]    ✖ tests dynamic loading length to function
[chrome 120.0.6099.130 windows #0-0]
[chrome 120.0.6099.130 windows #0-0] 2 passing (30.5s)
[chrome 120.0.6099.130 windows #0-0] 1 failing
[chrome 120.0.6099.130 windows #0-0]
[chrome 120.0.6099.130 windows #0-0] 1) dynamic loading tests dynamic loading length to function
[chrome 120.0.6099.130 windows #0-0] expected the array to have some records
[chrome 120.0.6099.130 windows #0-0] Error: expected the array to have some records
[chrome 120.0.6099.130 windows #0-0]     at async LoginPage.waitUntilArrayNotEmpty (C:\code\sample\test\pageobjects\login.page.js:17:3)
[chrome 120.0.6099.130 windows #0-0]     at async Context.<anonymous> (C:\code\sample\test\specs\test.e2e.js:34:5)
```
