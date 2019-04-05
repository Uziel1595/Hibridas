angular.module('kanbanApp',[])//CREAMOS EL MODULO PARA VINCULAR CON LA VISTA
	.controller('kanbanController',function($scope){//CREAMOS UN CONTROLADOR
		var kanbanCtrl = this;//INSTANCIAMOS EL CONTROLADOR
		kanbanCtrl.tasks = [];//CRAMOS LA LISTA DE TAREAS
		var index = 0;
		kanbanCtrl.add = function(){//funcion para agregar datos al arreglo
			var tmp = {
				index: index,
				name: $scope.newObj.name,//Con $scope podemos acceder a todas las variables en la vista
				desc: $scope.newObj.desc,
				status: 1
			};
			kanbanCtrl.tasks.push(tmp);
			$scope.newObj = {};
			index++;
		}
		kanbanCtrl.next = function($index){
			angular.forEach(kanbanCtrl.tasks , function(task){
				if(task.index == $index){
					task.status++;
				}
			});

		}
		kanbanCtrl.previous = function($index){
			angular.forEach(kanbanCtrl.tasks , function(task){
				if(task.index == $index){
					task.status--;
				}
			});
		}
	});