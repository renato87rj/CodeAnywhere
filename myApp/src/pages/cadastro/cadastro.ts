import { EstacionamentoPage } from './../estacionamento/estacionamento';
import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController} from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';



/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
  providers: [UsuarioProvider],
})
export class CadastroPage {  

  // public usuarioCadastro = {"name": "", "email": "", "password": "", "password_confirmation":""};
  public usuarioCadastro = {"nome": "", "email": "", "senha": "", "adm_estaciona": 0};
  public mensagem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioService: UsuarioProvider, public alertCtrl: AlertController, public toastCtrl: ToastController) {
         
  }  

  public cadastrarUsuario(){
    console.log(this.usuarioCadastro);
    this.usuarioService.salvar(this.usuarioCadastro)
    .then(() => {
      this.presentToast();
      this.navCtrl.setRoot(LoginPage);
    })
    .catch((erro) => {
      
      this.showAlert('Erro', erro);
    })
  }

  showAlert(title, mensagem) {
    this.alertCtrl.create({
      title: title,
      subTitle: mensagem,
      buttons: ['OK']
    }).present();
    
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Você administra um estacionamento?',
      message: 'Se você é um administrador de estacionamento o cadastre também, para que as pessoas possam ve-lo no mapa.',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.navCtrl.push(EstacionamentoPage);
          }
        },
        {
          text: 'Não',
          handler: () => {
            
          }
        }
      ]
    });
    confirm.present();
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Cadastro realizado. Faça seu Login.',
      duration: 3000
    });
    toast.present();
  }

}
