//object array for storing reviews
const reviews = [{
    id: 1,
    name: "Sarah J.",
    business: "Local Boutique Owner",
    reviewDesc: "The team at H.O.M. transformed our website! Their attention to detail and creativity truly set them apart. We saw a 40% increase in online sales within just a few months.",
    reviewCount: 4
},
{
    id: 2,
    name: "Lisa R.",
    business: "Restaurant Owner",
    reviewDesc: "The team not only designed a beautiful website but also implemented an online reservation system that has been a game-changer for us. Their support is outstanding—always there when we need them!",
    reviewCount: 5

},
{
    id: 3,
    name: "Alex M.",
    business: "Restaurant Owner",
    reviewDesc: "Not very demure. However, very mindful",
    reviewCount: 3
}]

let wrapper = document.querySelector(".reviews-container");

//foor loop iterating through each review and creating a div that is filled with content
reviews.forEach((review) => {
    console.log(review);
    let reviewElement = document.createElement("div");
    reviewElement.classList.add("review");

    reviewElement.innerHTML = `
    <div class="review-profile">
        <div class="reviewer-img" style="background-image: url('images/default-avatar.png');">
            <div class="reviewer-info">
                <h5>${review.name}</h5>
                <h6>${review.business}</h6>
            </div>
            <div class="review-rating">
            </div>
        </div>
    </div>
    <div class="review-p">
        <p>${review.reviewDesc}</p>
    </div>
    `;
    //nested for loop that iterates, adding star span equalling the reviewCount
    let starWrapper = reviewElement.querySelector(".review-rating");
    for(let i = 0; i < review.reviewCount; i++){
        
        let starElement = document.createElement("div");
        starElement.innerHTML = `<span class="fa fa-star checked"></span>`;
        starWrapper.appendChild(starElement);
    }
    wrapper.appendChild(reviewElement);
});