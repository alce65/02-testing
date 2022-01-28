function generateError() {
    const mainError = new Error('Testing error');
    mainError.code = 120;
    throw mainError;
}

try {
    generateError();
} catch (e) {
    console.log('Tranquilo ' + e.message, e.code);
    console.log(e);
}
