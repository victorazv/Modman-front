function ClientsComponentController($http, ENVIROMENT){
	var self = this;

	self.deleteData = deleteData;

	function deleteData(client){
		return $http.delete(ENVIROMENT + 'api/client/' + client.id).then(function(response){
			var index = self.clients.indexOf(client);
			if(index > -1){
				self.clients.splice(index, 1);
			}
			//console.log(response);
		}).catch(function(){

		});
	}
}

modman.component('modmanClients', {
	templateUrl: 'webapp/clients/clients.html',
	controller: ClientsComponentController,
	bindings: {
		clients: '<'
	}
});

//A vantagem de colocar requests que trazem dados inicias para a página no router
// eh que vc tem certeza que a pagina so comecara a exibir quando os dados estiverem no cliente
// se nao fizer assim vira e mexe o usuario vai ver {{variavel}} antes de carregar as coisas.
// Binding são os dados que o component vai receber de quem tiver chamando ele.
// se num html vc chama <modman-login></modman-login>
// mas no seu template vc precisa exibir o nome do sistema variabvel
// provavelmente vc vai querer criar uma binding nomeSistema
// e quando chamar o component passar para ele
// <modman-login nome-sistema="'cafetao system'" ></modman-login>
// ai dentro do controller do component, vc vai ter self.nomeSistema == 'cafetaoSystem'
//isso ai é para dizer que tipo de binding eh.
// basicamente: < one way // = two way // & funções
//Digamos que ali estamos declarndo as variavies usadas no componente...
//Sim, mas só aquelas que são necessárias o component ter logo ao ser criado.
// por exemplo... vc faz um component para mostrar uma lista de clientes;
// logo o minimo para vc mostrar a lista é ter os dados dos clientes.
// entao o component para ser carregado e exibido precisa desses dados disponiveis.