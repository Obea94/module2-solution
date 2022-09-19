(function () {
'use strict'

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemBuyer = this;

  itemBuyer.listToBuy = ShoppingListCheckOffService.getItemsToBuy();

  itemBuyer.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemBought = this;

  itemBought.listBought = ShoppingListCheckOffService.getItemsBought();
}

// my custom service
function ShoppingListCheckOffService() {
  var service = this;
  var listToBuy = [
   {name: "Milk", quantity: "2"},
   {name: "Donuts", quantity: "200"},
   {name: "Cookies", quantity: "300"},
   {name: "Chocolate", quantity: "5"},
   {name: "Tee", quantity: "4"}
  ];
  var listBought = [];

  service.buyItem = function (index) {
    service.addBought (index);
    service.removeBuy (index);
  };

  service.removeBuy = function (index) {
    listToBuy.splice(index, 1);
  }

  service.addBought = function (index) {
    listBought.push(listToBuy[index]);
  }

  service.getItemsToBuy = function () {
    return listToBuy;
  };

  service.getItemsBought = function () {
    return listBought;
  };
}

})();
