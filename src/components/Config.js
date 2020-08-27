const hostname = window && window.location && window.location.hostname;

export const postsUrl = hostname.includes('fitexperience') ? 'http://results.thefitexperience.com' : 'http://localhost:8888/fit-backend';