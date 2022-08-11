import * as React from "react";
import {DateField, useRecordContext} from 'react-admin';
import {makeStyles} from "@material-ui/core/styles";
import '../../../assets/css/message_bubbles.css';
import Date from "../../common/Date";

const ConversationMessagesField = ({source}) => {
    const record = useRecordContext();
    console.log('messages', record[source]);

    const contacts = [];

    return record ? (
        <div>
            {/*record[source].map(i =>
                <div key={i["@id"]}>
                    <div>{i["message"]}</div>
                </div>
            )*/}

            <div className="message-list-container">
                {record[source] && record[source].map(message => {
                    console.log('message', message);
                    contacts.push(message.from);
                    return (
                        <div className={`message-wrapper  ${contacts.length && message.from === contacts[0] ? 'left':'right'}`}>
                            <div className="message-container">
                                <div className="details">
                                    <div className="icon-container ">
                                        <div className="icon icon-cirlce"/>
                                    </div>
                                    <div className="other-container">
                                        <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip={message.dateText}
                        currentitem="false">
                    {/*23rd Nov 2021 17:09:13*/}
                      {message.dateText}
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                        </div>
                                        <div className="content">
                                            <div className="message">
                                                <div className="ellipsis ">
                                                    <p>{message.message}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="options">
                                            {message.options && message.options.map(option => (
                                                <div className="option">{option.value}</div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/*
                <div className="message-wrapper  left">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon icon-cirlce"/>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:09:13"
                        currentitem="false">
                    23rd Nov 2021 17:09:13
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>العربية</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  right">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon ">
                                    <div className="task-icon svg" data-tip="Ask a Question" data-place="right"
                                         data-for="react-tooltip" currentitem="false"><img
                                        src="./images/bot-question.svg"/></div>
                                </div>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:09:17"
                        currentitem="false">
                    23rd Nov 2021 17:09:17
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>قبل مانبداو، اشناهي الماركة ديال سيارتك؟</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options">
                                    <div className="option">Dacia</div>
                                    <div className="option">Renault</div>
                                    <div className="option">Volkswagen</div>
                                    <div className="option">Peugeot</div>
                                    <div className="option">FORD</div>
                                    <div className="option">Hyundai</div>
                                    <div className="option">Citroen</div>
                                    <div className="option">Toyota</div>
                                    <div className="option">Mercedes</div>
                                    <div className="option">Kia</div>
                                    <div className="option">Audi</div>
                                    <div className="option">Skoda</div>
                                    <div className="option">المزيد</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  left">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon icon-cirlce"/>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:09:17"
                        currentitem="false">
                    23rd Nov 2021 17:09:17
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>Peugeot</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  right">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon ">
                                    <div className="task-icon svg" data-tip="Send a Message" data-place="right"
                                         data-for="react-tooltip" currentitem="false"><img
                                        src="./images/bot-message.svg"/></div>
                                </div>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:09:18"
                        currentitem="false">
                    23rd Nov 2021 17:09:18
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p> Peugeot :ماركة سيارتك هي </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  right">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon ">
                                    <div className="task-icon svg" data-tip="Ask a Question" data-place="right"
                                         data-for="react-tooltip" currentitem="false"><img
                                        src="./images/bot-question.svg"/></div>
                                </div>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:09:29"
                        currentitem="false">
                    23rd Nov 2021 17:09:29
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>عزيزة عليا هاد الماركة !!! ما عندي ما نتسالك، إينا عام خرجات ؟</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options">
                                    <div className="option">المزيد</div>
                                    <div className="option">2009</div>
                                    <div className="option">2008</div>
                                    <div className="option">2007</div>
                                    <div className="option">2006</div>
                                    <div className="option">2005</div>
                                    <div className="option"> 2004</div>
                                    <div className="option"> 2003</div>
                                    <div className="option"> 2002</div>
                                    <div className="option"> 2001</div>
                                    <div className="option">2000</div>
                                    <div className="option"> الرجوع</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  left">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon icon-cirlce"/>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:09:29"
                        currentitem="false">
                    23rd Nov 2021 17:09:29
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>2008</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  right">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon ">
                                    <div className="task-icon svg" data-tip="Send a Message" data-place="right"
                                         data-for="react-tooltip" currentitem="false"><img
                                        src="./images/bot-message.svg"/></div>
                                </div>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:09:32"
                        currentitem="false">
                    23rd Nov 2021 17:09:32
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>السنة اللي خرجات فيها سيارتك هي: 2008</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  right">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon ">
                                    <div className="task-icon svg" data-tip="Ask a Question" data-place="right"
                                         data-for="react-tooltip" currentitem="false"><img
                                        src="./images/bot-question.svg"/></div>
                                </div>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:09:39"
                        currentitem="false">
                    23rd Nov 2021 17:09:39
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>تقدر تعطيني الموديل عافاك ؟</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options">
                                    <div className="option">الرجوع</div>
                                    <div className="option">206</div>
                                    <div className="option">206 Sedan</div>
                                    <div className="option">207</div>
                                    <div className="option">207 CC</div>
                                    <div className="option">207 SW</div>
                                    <div className="option">307</div>
                                    <div className="option">307 SW</div>
                                    <div className="option">308</div>
                                    <div className="option">308 CC</div>
                                    <div className="option">206 SW</div>
                                    <div className="option">المزيد</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  left">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon icon-cirlce"/>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:09:39"
                        currentitem="false">
                    23rd Nov 2021 17:09:39
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>207</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  right">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon ">
                                    <div className="task-icon svg" data-tip="Send a Message" data-place="right"
                                         data-for="react-tooltip" currentitem="false"><img
                                        src="./images/bot-message.svg"/></div>
                                </div>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:09:40"
                        currentitem="false">
                    23rd Nov 2021 17:09:40
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>207 :موديل سيارتك هو </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  right">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon ">
                                    <div className="task-icon svg" data-tip="Ask a Question" data-place="right"
                                         data-for="react-tooltip" currentitem="false"><img
                                        src="./images/bot-question.svg"/></div>
                                </div>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:09:44"
                        currentitem="false">
                    23rd Nov 2021 17:09:44
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p> اشناهو نوع الوقود؟ </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options">
                                    <div className="option">الرجوع</div>
                                    <div className="option">Diesel</div>
                                    <div className="option">Essence</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  left">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon icon-cirlce"/>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:09:44"
                        currentitem="false">
                    23rd Nov 2021 17:09:44
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>Diesel</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  right">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon ">
                                    <div className="task-icon svg" data-tip="Ask a Question" data-place="right"
                                         data-for="react-tooltip" currentitem="false"><img
                                        src="./images/bot-question.svg"/></div>
                                </div>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:09:52"
                        currentitem="false">
                    23rd Nov 2021 17:09:52
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>Diesel : وقود سيارتك هو</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options">
                                    <div className="option">الرجوع</div>
                                    <div className="option">متابعة</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  left">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon icon-cirlce"/>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:09:52"
                        currentitem="false">
                    23rd Nov 2021 17:09:52
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>Continuer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  right">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon ">
                                    <div className="task-icon svg" data-tip="Ask a Question" data-place="right"
                                         data-for="react-tooltip" currentitem="false"><img
                                        src="./images/bot-question.svg"/></div>
                                </div>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:10:16"
                        currentitem="false">
                    23rd Nov 2021 17:10:16
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>شحال عدد الكيلومترات ؟</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  left">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon icon-cirlce"/>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:10:16"
                        currentitem="false">
                    23rd Nov 2021 17:10:16
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>195000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  right">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon ">
                                    <div className="task-icon svg" data-tip="Send a Message" data-place="right"
                                         data-for="react-tooltip" currentitem="false"><img
                                        src="./images/bot-message.svg"/></div>
                                </div>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:10:17"
                        currentitem="false">
                    23rd Nov 2021 17:10:17
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>195000 Km :الكيلوميترات ديال سيارتك هي </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  right">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon ">
                                    <div className="task-icon svg" data-tip="Ask a Question" data-place="right"
                                         data-for="react-tooltip" currentitem="false"><img
                                        src="./images/bot-question.svg"/></div>
                                </div>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:10:23"
                        currentitem="false">
                    23rd Nov 2021 17:10:23
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>اشنو نوع البواطافيتاس عندك ؟</p>
                                            <p>."ويلا بغيتي تبدل الكيلوميتراج ضغط على "الرجوع</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options">
                                    <div className="option">الرجوع</div>
                                    <div className="option">Manuelle</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  left">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon icon-cirlce"/>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:10:23"
                        currentitem="false">
                    23rd Nov 2021 17:10:23
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>Manuelle</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  right">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon ">
                                    <div className="task-icon svg" data-tip="Ask a Question" data-place="right"
                                         data-for="react-tooltip" currentitem="false"><img
                                        src="./images/bot-question.svg"/></div>
                                </div>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:10:28"
                        currentitem="false">
                    23rd Nov 2021 17:10:28
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>شحال ديال الخيل فيها ؟</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options">
                                    <div className="option">الرجوع</div>
                                    <div className="option">6</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  left">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon icon-cirlce"/>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:10:28"
                        currentitem="false">
                    23rd Nov 2021 17:10:28
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>6</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  right">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon ">
                                    <div className="task-icon svg" data-tip="Ask a Question" data-place="right"
                                         data-for="react-tooltip" currentitem="false"><img
                                        src="./images/bot-question.svg"/></div>
                                </div>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:10:42"
                        currentitem="false">
                    23rd Nov 2021 17:10:42
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>اشناهي نسخة السيارة؟</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options">
                                    <div className="option"> I Ph1 - 1.4 HDi</div>
                                    <div className="option"> I Ph1 - 1.4 HDi</div>
                                    <div className="option"> I Ph1 - 1.4 HDi</div>
                                    <div className="option"> I Ph1 - 1.4 HDi</div>
                                    <div className="option"> الرجوع</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  left">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon icon-cirlce"/>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:10:42"
                        currentitem="false">
                    23rd Nov 2021 17:10:42
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>207 I - Ph1 - 1.4 HDi Access BVM 70ch</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  right">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon ">
                                    <div className="task-icon svg" data-tip="Ask a Question" data-place="right"
                                         data-for="react-tooltip" currentitem="false"><img
                                        src="./images/bot-question.svg"/></div>
                                </div>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:10:52"
                        currentitem="false">
                    23rd Nov 2021 17:10:52
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>.مني باغي تعرف شحال غادي تجيب، هيا ناوي تبدل انشاء الله<br/>ايمتا ناوي
                                                تبيع طوموبيلتك ؟</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options">
                                    <div className="option">الرجوع</div>
                                    <div className="option">مازال معرفتش</div>
                                    <div className="option">من هنا شهرين</div>
                                    <div className="option">من هنا شهر</div>
                                    <div className="option"> من هنا 15 يوم</div>
                                    <div className="option"> دابا</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  left">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon icon-cirlce"/>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:10:51"
                        currentitem="false">
                    23rd Nov 2021 17:10:51
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p> dans 15 jours</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  right">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon ">
                                    <div className="task-icon svg" data-tip="Ask a Question" data-place="right"
                                         data-for="react-tooltip" currentitem="false"><img
                                        src="./images/bot-question.svg"/></div>
                                </div>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:10:57"
                        currentitem="false">
                    23rd Nov 2021 17:10:57
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>باش نقدر نصيفط ليك ثمن السيارة، شرفني بالمعرفة ديالك</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options">
                                    <div className="option">سيدة</div>
                                    <div className="option"> سيد</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  left">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon icon-cirlce"/>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:10:57"
                        currentitem="false">
                    23rd Nov 2021 17:10:57
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>Femme </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  right">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon ">
                                    <div className="task-icon svg" data-tip="Ask a Question" data-place="right"
                                         data-for="react-tooltip" currentitem="false"><img
                                        src="./images/bot-question.svg"/></div>
                                </div>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:11:09"
                        currentitem="false">
                    23rd Nov 2021 17:11:09
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>الاسم الشخصي؟</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  left">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon icon-cirlce"/>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:11:08"
                        currentitem="false">
                    23rd Nov 2021 17:11:08
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>Hanaa</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  right">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon ">
                                    <div className="task-icon svg" data-tip="Ask a Question" data-place="right"
                                         data-for="react-tooltip" currentitem="false"><img
                                        src="./images/bot-question.svg"/></div>
                                </div>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:11:19"
                        currentitem="false">
                    23rd Nov 2021 17:11:19
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>الاسم العائلي؟</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper  left">
                    <div className="message-container">
                        <div className="details">
                            <div className="icon-container ">
                                <div className="icon icon-cirlce"/>
                            </div>
                            <div className="other-container">
                                <div className="date">
                  <span className="date" data-for="date" data-event-off="mouseleave" data-tip="23rd Nov 2021 17:11:19"
                        currentitem="false">
                    23rd Nov 2021 17:11:19
                    <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"/>
                  </span>
                                </div>
                                <div className="content">
                                    <div className="message">
                                        <div className="ellipsis ">
                                            <p>Bezza</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="options"/>
                            </div>
                        </div>
                    </div>
                </div>*/}
            </div>

        </div>
    ) : null;
}

export default ConversationMessagesField;