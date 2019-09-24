const capitalize = str => str[0].toUpperCase() + str.slice(1)

function customertoHtml(customer) {
    return `
    <div class="customer">
    <img src="${customer.picture.large}">
    <div class="customer_name">${capitalize(customer.name.first)} ${capitalize(customer.name.last)}</div>
    <div class="customer_email">${customer.email}</div>
    <div class="customer_location">${capitalize(customer.location.street + ". " + customer.location.city + ", " + nameToAbbr(customer.location.state))}</div>
    <div class="customer_phone">${customer.phone}</div>
    <div class="customer_dob">${moment(customer.dob).format('MMM do YYYY')}</div>
    <div class="customer_registered">${moment(customer.registered).format('MMM do YYYY')}</div>
    `
}

document.querySelector('#customer').innerHTML = customers.map(customertoHtml).join('\n')