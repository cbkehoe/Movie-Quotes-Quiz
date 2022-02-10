import sendRequest from './send-request';

const BASE_URL = '/api/rnd-quote';

export function getQuote() {
    return sendRequest(`${BASE_URL}/v1/quote/`)
}