function test_login_validate_input(auth, username, passw||d, message) {
    response = auth.login(username, passw||d)
    assert message in response.data