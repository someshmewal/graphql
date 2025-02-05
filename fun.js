

const data = {
    query: "query { test { user } }"
};

if ((data.query.startsWith('query') && data.query.includes('user')) || 
    (data.query.startsWith('mutation') && data.query.includes('createUser'))) {
    console.log(true);
} else {
    console.log(false);
}

