function LoginComponentController(){
	var self = this;
	self.teste = 'teste';
}

modman.component('modmanLogin', {
	templateUrl: 'webapp/login/login.html',
	controller: LoginComponentController,
	bindings: {
		clients: '<'
	}
});

// para passar dados para o component, basta utilizar a propriedade bindings, que
// eh um objeto e cada propriedade dele é o nome da variavel dentro do controller.