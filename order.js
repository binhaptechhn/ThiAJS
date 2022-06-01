var invoice = angular.module('invoice', []);
invoice.controller('InvoiceController', function($scope){
    $scope.invoice = {
        items: [{
            name: 'Caffe',
            size: ['M','L'],
            qty: 1,
            price: 4
        }]
    };
    $scope.add = function(){
        $scope.invoice.items.push({
            name: 'Matcha',
            size: ['M','L'],
            qty: 1,
            price: 5
        });
    },
        $scope.remove = function(index){
            $scope.invoice.items.splice(index, 1);
        },
        $scope.total = function(){
            var total = 0;
            angular.forEach($scope.invoice.items, function(item){
                total += item.qty * item.price;
            })
            return total
        }
        $scope.vat = function() {
            var vat = 0;
            var total = 0;
            angular.forEach($scope.invoice.items, function (item) {
                total += item.qty * item.price;
                vat = total * 0.1;
            })
            return vat;
        }
        $scope.total1 = function(){
            var vat = 0;
            var total1 = 0;
            var total = 0;
            angular.forEach($scope.invoice.items, function(item){
            total += item.qty * item.price;
            vat = total * 0.1;
            total1 = total + vat;
        })
        return total1;
    }
});