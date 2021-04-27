let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean);

//expected output: { prefix: 'Pacific' };

let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean);

//expected output:  { Indian: 'Pacific' };
