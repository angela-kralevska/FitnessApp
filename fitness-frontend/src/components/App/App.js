import React, { Component } from 'react';
import './App.css';
import Header from "../Header/header";
import Header2 from "../Header2/header2";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import MembersService from '../../repository/axiosMembersRepository.js';
import Members from '../Members/MemberList/members-list';
import MemberEdit from '../Members/MemberEdit/member-edit';
import MemberAdd from '../Members/MemberAdd/member-add';
import CardInfosService from '../../repository/axiosCardInfosRepository';
import CardInfos from '../CardInfos/CardInfoList/cardinfos-list';
import Visits from '../Visits/VisitList/visits-list';
import VisitsService from '../../repository/axiosVisitsRepository';
import VisitAdd from '../Visits/VisitAdd/visit-add';
import Payments from '../Payments/PaymentsList/payments-list';
import PaymentsService from '../../repository/axiosPaymentsRepository';
import PaymentAdd from '../Payments/PaymentAdd/payment-add';
import Cards from '../Cards/CardList/cards-list';
import CardsService from '../../repository/axiosCardsRepository';
import CardAdd from '../Cards/CardAdd/card-add';
import LoginService from '../../repository/axiosLoginRepository';
import Login from '../Login/login';
import Home from '../Home/home';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            members: [],
            cardInfos: [],
            pageSize: 4,
            page: 0,
            totalPages: 0,
            visits: [],
            payments: [],
        }
    }

    componentDidMount() {
        this.loadMembers();
        this.loadCardInfos();
        this.loadVisits();
        this.loadPayments();
        this.loadCards();
    }

    loadMembers = () => {
        MembersService.fetchMembers().then((response) => {
            this.setState({
                members: response.data.content
            })
        })
    
    }

    addMember = (newMember) => {
        MembersService.createMember(newMember).then((response) => {
            const newMember = response.data;
            this.setState((prevState) => {
                const newMembersRef = [...prevState.members, newMember];
                return {
                    "members": newMembersRef
                }
            });
        });
    }


    updateMember = (editedMember) => {
        MembersService.updateMember(editedMember).then((response) => {
            const newMember = response.data;
            this.setState((prevState) => {
                const newMembersRef = prevState.members.map((item) => {
                    if (item.memberId === newMember.memberId) {
                        return newMember;
                    }
                    return item;
                })
                return {
                    "members": newMembersRef
                }
            });
        });
    }

    searchData = (searchTerm) => {
        if (searchTerm === '')
            return;
        MembersService.searchMember(searchTerm).then((response) => {
            this.setState({
                members: response.data
            })
        })
    }

    deleteMem = (memberId) => {
        MembersService.deleteMember(memberId).then((response) => {
            this.setState((state) => {
                const members = state.members.filter((m) => {
                    return m.memberId !== memberId;
                });
                return { members }
            })
        })
    }

    loadCardInfos = (page = 0, pageSize = 4) => {
        CardInfosService.fetchCardInfosPaged(page, pageSize).then((response) => {
            this.setState({
                cardInfos: response.data.content,
                page: response.data.page,
                pageSize: response.data.pageSize,
                totalPages: response.data.totalPages
            })
        })

    }

    loadVisits = () => {
        VisitsService.fetchVisits().then((response) => {
            this.setState({
                visits: response.data.content
            })
        })

    }

    addVisit = (newVisit) => {
        VisitsService.createVisit(newVisit).then((response) => {
            const newVisit = response.data;
            this.setState((prevState) => {
                const newVisitsRef = [...prevState.visits, newVisit];
                return {
                    "visits": newVisitsRef
                }
            });
        });
    }

    deleteVis = (visitId) => {
        VisitsService.deleteVisit(visitId).then((response) => {
            this.setState((state) => {
                const visits = state.visits.filter((m) => {
                    return m.visitId !== visitId;
                });
                return { visits }
            })
        })
    }

    loadPayments = () => {
        PaymentsService.fetchPayments().then((response) => {
            this.setState({
                payments: response.data.content
            })
        })

    }

    addPayment = (newPayment) => {
        PaymentsService.createPayment(newPayment).then((response) => {
            const newPayment = response.data;
            this.setState((prevState) => {
                const newPaymentsRef = [...prevState.payments, newPayment];
                return {
                    "payments": newPaymentsRef
                }
            });
        });
    }

    deletePay = (paymentId) => {
        PaymentsService.deletePayment(paymentId).then((response) => {
            this.setState((state) => {
                const payments = state.payments.filter((m) => {
                    return m.paymentId !== paymentId;
                });
                return { payments }
            })
        })
    }

    loadCards = () => {
        CardsService.fetchCards().then((response) => {
            this.setState({
                cards: response.data.content
            })
        })

    }

    addCard = (newCard) => {
        CardsService.createCard(newCard).then((response) => {
            const newCard = response.data;
            this.setState((prevState) => {
                const newCardsRef = [...prevState.cards, newCard];
                return {
                    "cards": newCardsRef
                }
            });
        });
    }

    deleteCar = (cardId) => {
        CardsService.deleteCard(cardId).then((response) => {
            this.setState((state) => {
                const cards = state.cards.filter((c) => {
                    return c.cardId !== cardId;
                });
                return { cards }
            })
        })
    }
    

    signIn = (username, password) => {
        LoginService.login(username, password)
            .then(() => {
                localStorage.setItem("isLoggedIn", "yes");
            })
    }

    signOut = () => {
        localStorage.setItem("isLoggedIn", "no");
    }


    render() {

        const routing = (
            <Router>
                <Header />
                <main role="main" className="mt-3">

                    <div className="container">
                        <Route path={"/members"} exact render={() =>
                            <Members onPageClick={this.loadMembers} members={this.state.members} onSearch={this.searchData} onDelete={this.deleteMem} />}>

                        </Route>
                        <Route path={"/members/add"} render={() => <MemberAdd onNewMemberAdded={this.addMember} />}>
                        </Route>
                        <Route path="/members/:memberId/edit" render={() =>
                            <MemberEdit onSubmit={this.updateMember} />}>
                        </Route>
                        <Route path={"/cardInfos"} exact render={() =>
                            <CardInfos onPageClick={this.loadCardInfos} cardInfos={this.state.cardInfos} totalPages={this.state.totalPages} />}></Route>
                        <Route path={"/visits"} exact render={() =>
                            <Visits onPageClick={this.loadVisits} visits={this.state.visits} onDelete={this.deleteVis} />}>

                        </Route>
                        <Route path={"/visits/add"} render={() => <VisitAdd onNewVisitAdded={this.addVisit} />}>
                        </Route>
                        <Route path={"/payments"} exact render={() =>
                            <Payments onPageClick={this.loadPayments} payments={this.state.payments} onDelete={this.deletePay} />}>

                        </Route>
                        <Route path={"/payments/add"} render={() => <PaymentAdd onNewPaymentAdded={this.addPayment} />}>
                        </Route>
                        <Route path={"/cards"} exact render={() =>
                            <Cards onPageClick={this.loadCards} cards={this.state.cards} onDelete={this.deleteCar} />}>
                        </Route>
                        <Route path={"/cards/add"} render={() => <CardAdd onNewCardAdded={this.addCard} />}>
                        </Route>
                        <Route path={"/home"} exact render ={this.signOut} refresh="true"  ></Route>
                    </div>
                </main>
            </Router>
        )
        const routing2 = (
            <Router>
                <main role="main" className="mt-3">

                    <div className="container">
                       
                        <Route path={"/home"} render={() => <Home />}></Route>
                        <Route path={"/login"} exact render={() =>
                            <Login onLogin={this.signIn}/>}></Route>
                    </div>
                </main>
            </Router>
        )
        if (localStorage.getItem("isLoggedIn")==="no"){
        return (  
            <div className="App">
                {routing2}
            </div>   
        )}
        else if (localStorage.getItem("isLoggedIn")==="yes"){
        return(
            <div className="App">
                {routing}
            </div>   
        )}
    }
}

export default App;
