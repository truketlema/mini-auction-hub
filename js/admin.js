const form = document.getElementById("admin-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("item-name").value.trim();
  const description = document.getElementById("item-description").value.trim();
  const imageInput = document.getElementById("item-image");
  const startingPrice = Number(document.getElementById("starting-price").value);
  const startTime = document.getElementById("start-time").value;
  const endTime = document.getElementById("end-time").value;

  const brand = document.getElementById("brand").value.trim();
  const model = document.getElementById("model").value.trim();
  const material = document.getElementById("material").value.trim();
  const condition = document.getElementById("condition").value;
  const shipping = document.getElementById("shipping").value.trim();

  if (!name || !description || !startingPrice || !startTime || !endTime) {
    alert("Please fill all required fields.");
    return;
  }

  const startTimestamp = new Date(startTime).getTime();
  const endTimestamp = new Date(endTime).getTime();

  if (endTimestamp <= startTimestamp) {
    alert("Ending time must be after starting time.");
    return;
  }

  // Handle image (simple preview storage)
  let imageURL = "";
  if (imageInput.files.length > 0) {
    imageURL = URL.createObjectURL(imageInput.files[0]);
  }

  const auctionItem = {
    id: Date.now(),
    name,
    description,
    imageURL,
    startingPrice,
    highestBid: startingPrice,
    startTime: startTimestamp,
    endTime: endTimestamp,
    bids: [],
    specs: {
      brand,
      model,
      material,
      condition,
      shipping,
    },
  };

  const existingItems = JSON.parse(localStorage.getItem("auctionItems")) || [];

  existingItems.push(auctionItem);

  localStorage.setItem("auctionItems", JSON.stringify(existingItems));

  alert("Auction item added successfully!");
  form.reset();
});
