import Customer from './Customer.js'
(function(){
    let name = document.getElementById('name');
    let current = 0;
    let testimonialInfo = document.getElementById('testimonialInfo');
    let allCustomers = [];

    testimonialInfo.addEventListener('click', (e)=>{
        changeCustomer(e.target);
    });

    function createCustomer(name, image, text){
        let img = `../img/customer-${image}.jpg`;
        let customer = new Customer(name, img, text);

        allCustomers.push(customer);
    }

    //console.log(allCustomers)

    createCustomer('Esa', 1, 'Pimppiä');
    createCustomer('Esa', 2, 'BBB');
    createCustomer('Esa', 3, 'asdasd');
    createCustomer('Esa', 4, 'asdasdasd');
    createCustomer('Esa', 5, 'wqeqweqweqe');
    createCustomer('Esa', 6, '1231231231231');

    function renderTestimonial(customer){
            let nameHeader = document.createElement('h1');
            let imageContainer = document.getElementById('picture');

            nameHeader.textContent = customer.name;
            imageContainer.style.backgroundImage = `url(${customer.picture})`;

            name.appendChild(nameHeader);
    }

    function changeCustomer(target){
        let nextButton = document.getElementById('next');
        let previousButton = document.getElementById('previous');


        if(target === nextButton){
            renderTestimonial(allCustomers[current++]);
        }
        else if(target === previousButton){
            renderTestimonial(allCustomers[current++]);
        }
    }

    renderTestimonial(allCustomers[current]);
})();