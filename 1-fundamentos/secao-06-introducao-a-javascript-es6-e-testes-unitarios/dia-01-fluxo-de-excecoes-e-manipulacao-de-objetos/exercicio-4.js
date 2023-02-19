const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {    
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const clientName = order.name;
    const clientPhone = order.phoneNumber;
    const adress = `${order.address.street}, n: ${order.address.number}, ap: ${order.address.apartment}`;

    return `Olá, ${deliveryPerson}. Entrega para: ${clientName}, telefone: ${clientPhone}, residente na ${adress}.`;
  };
//   console.log(customerInfo(order));
  
  order.name = 'Luiz Silva';
  order.payment.total = 50;

  const orderModifier = (order) => {
    const clientName = order.name;
    const orderedPizza = Object.keys(order.order.pizza);
    const orderedDrink = order.order.drinks.coke.type;
    const payment = order.payment.total;

    return `Olá, ${clientName}. O total do seu pedido de ${orderedPizza[0]}, ${orderedPizza[1]} e ${orderedDrink} é de R$ ${payment},00.`;  
  };
  
  console.log(orderModifier(order));