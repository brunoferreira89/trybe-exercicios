const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const message = (email) => console.log(`O e-mail ${email} está cadastrado em nosso banco de dados!`);

emailListInData.forEach(message);