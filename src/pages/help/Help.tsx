import React, { useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonLabel, IonItem, IonGrid, IonRow, IonCol } from '@ionic/react';
import ReactGA from 'react-ga';
import './../Common.css'

const Help: React.FC = () => {

  useEffect(() => {
    ReactGA.pageview("Help");
  }, []);

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Ajuda</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense" translucent={true}>
          <IonToolbar>
            <IonTitle size="large">Ajuda</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid fixed className="ion-padding">
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle><a href="tel:808242424" style={{ textDecoration: "none" }}>808 24 24 24</a></IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Se estiver com sintomas e para tirar dúvidas específicas, ligue ao SNS 24
                        </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle><a href="tel:220411190" style={{ textDecoration: "none" }}>220 411 190</a></IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Se tiver sintomas e estiver no norte de Portugal, ligue para linha da Administração Regional de Saúde
                        </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Sintomas</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Os seguintes sintomas podem ser indicativos do COVID-19
                            <IonList>
                    <IonItem>
                      <IonLabel>
                        Tosse
                                    </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>
                        Febre
                                    </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>
                        Dificuldade Respiratória
                                    </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>
                        Cefaléia
                                    </IonLabel>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Como se prevenir?</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  A prevenção é a melhor contribuição que podemos fazer a todos
                            <IonList>
                    <IonItem>
                      <IonLabel>
                        Distânciamento Social
                      </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>
                        Tapar o nariz e boca quando espirrar ou tossir
                                    </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>
                        Lavar frequentemente as mãos com água e sabão
                                    </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>
                        Evitar contacto próximo com doentes
                                    </IonLabel>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>
                <p>Esta área encontra-se em construção. Mais tópicos serão adicionados em breve</p>
              </IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Help;
