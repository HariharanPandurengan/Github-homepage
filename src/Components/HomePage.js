import React, { useState } from "react";
import "../App.css"

function HomePage() {

    const[updatehomepage,setUpdatehomepage] = useState(false);

    return ( 
        <section style={{width:"100%"}} id="home-whole-sec">
            <section id="Homeleft-sec">
                <div style={{width:"80%",marginTop:"60px"}}>
                    <div style={{display:"flex",height:"20px",justifyContent:"space-between",alignItems:"center"}}>
                        <p style={{fontWeight:"600"}} className="home-leftsec-ptags">Top Repositories</p>
                        <button id="leftsec-newBTN" style={{display:"flex",padding:"4px 4px"}}>
                            <svg style={{fill:"rgb(234, 232, 232)"}} aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo">
                                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                            </svg>New
                        </button>
                    </div>
                    <input id="Homeleft-sec-input" style={{marginTop:"10px",borderRadius:"5px",padding:"5px 10px"} } placeholder="Find a repository..."></input>
                </div>
                <div style={{width:"80%",marginTop:"30px"}}>
                    <h5 className="home-leftsec-ptags" style={{margin:"0"}}>Recent activity</h5>
                    <p style={{color:"gray",borderRadius:"3px",fontSize:"11px",margin:"5px 0px",border:"1px dotted gray",padding:"10px"}}>when you take actions across GitHub.we'll provide links to that activity here.</p>
                </div>
            </section>
            <section id="home-mainSection">
                <div id="mainSection-Parentdiv">
                    <div id="mainSection-childdiv1">
                        <div id="mainSection-childdiv1-child1">
                            <p style={{fontWeight:"600",fontSize:"18px"}}>Home</p>
                            <div style={{minWidth:"28%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className="feedbach-hover">Send feedback</p>
                                <button style={{display:"flex",backgroundColor:"rgb(238, 238, 238)",border:"1px solid rgb(258, 256, 256)",borderRadius:"5px",padding:"3px 10px"}}>
                                    <svg style={{marginRight:"7px",marginTop:"2px"}} aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-filter mr-2">
                                        <path d="M.75 3h14.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1 0-1.5ZM3 7.75A.75.75 0 0 1 3.75 7h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 7.75Zm3 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path>
                                    </svg>
                                    <span style={{marginRight:"7px",marginTop:"1px"}}>Filter</span>
                                    <span style={{border:"1px solid rgb(197, 196, 196)",backgroundColor:"rgb(197, 196, 196)",borderRadius:"50%",padding:"1px 4px"}}>8</span>
                                </button>
                            </div>
                        </div>
                        <div className="mainSection-childdiv1-child2" id={updatehomepage ? 'update-homepage-notvivible' : 'update-homepage-vivible'}>
                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <h5 style={{fontWeight:"600",fontSize:"14px",margin:"15px 0px"}}>Updates to your homepage feed</h5>
                                <p style={{color:"gray",cursor:"pointer",margin:"15px 0px"}} onClick={()=>setUpdatehomepage(true)}>x</p>
                            </div>
                            <p style={{margin:"0",fontSize:"13px"}}>We've combined the power of the Following feed with the For you feed so there’s one place to discover content on GitHub. There’s improved filtering so you can customize your feed exactly how you like it, and a shiny new visual design. ✨</p>
                            <p style={{fontWeight:"600"}} className="feedbach-hover">Learn more</p>
                        </div>
                        <div id="mainSection-childdiv1-child3">
                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                    <svg style={{border:"1px solid rgb(181, 180, 190)",backgroundColor:"rgb(191, 200, 210)",borderRadius:"50%",padding:"7px 7px",marginRight:"5px"}} aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code color-fg-subtle">
                                       <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
                                    </svg>
                                    <p style={{color:"gray"}}>Start writing code</p>
                                </div>
                                <div>
                                    <svg style={{cursor:"pointer"}} aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal">
                                       <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="startwritingcode-child-parentdiv">
                                <div className="startwritingcode-child-childs">
                                    <div style={{width:"92%"}}>
                                        <p style={{margin:"0",fontWeight:"600",fontSize:"14px",marginBottom:"10px"}}>Start a new repository</p>
                                        <p style={{color:"gray",fontSize:"14px",margin:"0",marginBottom:"10px"}}>A repository contains all of your project's files, revision history, and collaborator discussion</p>
                                        <div style={{display:"flex",alignItems:"center"}}>
                                            <p style={{fontSize:"14px"}}>Name/</p>
                                            <input style={{borderRadius:"3px",border:"1px solid gray",padding:"3px",marginLeft:"2px"}} placeholder="name your repository..." />
                                        </div>
                                        <form>
                                            <div style={{display:"flex",alignItems:"center"}}>
                                                <input type="radio" name="public-private"/>
                                                <label style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <svg style={{fill:"gray"}} aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-repo color-fg-subtle mx-2">
                                                        <path d="M3 2.75A2.75 2.75 0 0 1 5.75 0h14.5a.75.75 0 0 1 .75.75v20.5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h5.25v-4H6A1.5 1.5 0 0 0 4.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 0 1-.6 1.374A3.251 3.251 0 0 1 3 18.75ZM19.5 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.651A2.989 2.989 0 0 1 6 15h13.5Z"></path><path d="M7 18.25a.25.25 0 0 1 .25-.25h5a.25.25 0 0 1 .25.25v5.01a.25.25 0 0 1-.397.201l-2.206-1.604a.25.25 0 0 0-.294 0L7.397 23.46a.25.25 0 0 1-.397-.2v-5.01Z"></path>
                                                    </svg> 
                                                    <div style={{marginLeft:"4px"}}>
                                                        <p style={{margin:"0",fontSize:"12px",fontWeight:"600"}}>Public</p>
                                                        <p style={{margin:"0",color:"gray",fontSize:"12px"}}>Anyone on the internet can see this repository</p>
                                                    </div>
                                                </label> 
                                            </div>
                                                <br/>
                                            <div style={{display:"flex",alignItems:"center",marginBottom:"15px"}}>
                                                <input type="radio" name="public-private" />
                                                <label style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <svg style={{fill:"gray"}} aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-lock color-fg-subtle mx-2">
                                                        <path d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9Zm-1.5 2.5v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Zm3-4.25V9h9V7.25c0-2.67-1.922-4.75-4.5-4.75-2.578 0-4.5 2.08-4.5 4.75Z"></path>
                                                    </svg>
                                                    <div style={{marginLeft:"4px"}}>
                                                        <p style={{margin:"0",fontSize:"12px",fontWeight:"600"}}>Private</p>
                                                        <p style={{margin:"0",color:"gray",fontSize:"12px"}}>You choose who can see and commit to this repository</p>
                                                    </div>
                                                </label>
                                            </div>
                                        </form>
                                        <button className="sec3-green-btn" style={{padding:"5px 7px",color:"white",fontSize:"12px",borderRadius:"7px",marginBottom:"15px"}}>Create a new repository</button>
                                    </div>
                                </div>
                                <div className="startwritingcode-child-childs">
                                    <div style={{width:"92%"}}>
                                        <div>
                                            <p style={{margin:"0",fontWeight:"600",fontSize:"14px",marginBottom:"10px"}}>Introduce yourself with a profile README</p>
                                            <p style={{color:"gray",fontSize:"14px",margin:"0",marginBottom:"10px"}}>Share information about yourself by creating a profile README, which appears at the top of your profile page.</p>
                                        </div>
                                        <div style={{border:"1px solid gray",borderRadius:"5px",width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                                            <div style={{width:"90%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                                                <div id="intro-youselfSection-MobieCorrection" style={{alignItems:"center",width:"100%",borderBottom:"1px solid gray",padding:"10px 0px"}}>
                                                    <p style={{margin:"0",fontSize:"11px"}}>HariharanPandurengan/README.<span style={{color:"gray"}}>md</span></p>
                                                    <button className="sec3-green-btn" style={{padding:"5px 7px",color:"white",fontSize:"12px",borderRadius:"7px"}}>Create</button>
                                                </div>
                                                <div> 
                                                    <ol>
                                                        <li style={{fontSize:"11px"}}> 👋 Hi, I’m @HariharanPandurengan</li>
                                                        <li style={{fontSize:"11px"}}>👀 I’m interested in ...</li>
                                                        <li style={{fontSize:"11px"}}>🌱 I’m currently learning ...</li>
                                                        <li style={{fontSize:"11px"}}>💞️ I’m looking to collaborate on ...</li>
                                                        <li style={{fontSize:"11px"}}>📫 How to reach me ...</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                    <svg style={{border:"1px solid rgb(181, 180, 180)",backgroundColor:"rgb(191, 200, 220)",borderRadius:"50%",padding:"7px 7px",marginRight:"5px"}} aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-tools color-fg-subtle">
                                        <path d="M5.433 2.304A4.492 4.492 0 0 0 3.5 6c0 1.598.832 3.002 2.09 3.802.518.328.929.923.902 1.64v.008l-.164 3.337a.75.75 0 1 1-1.498-.073l.163-3.33c.002-.085-.05-.216-.207-.316A5.996 5.996 0 0 1 2 6a5.993 5.993 0 0 1 2.567-4.92 1.482 1.482 0 0 1 1.673-.04c.462.296.76.827.76 1.423v2.82c0 .082.041.16.11.206l.75.51a.25.25 0 0 0 .28 0l.75-.51A.249.249 0 0 0 9 5.282V2.463c0-.596.298-1.127.76-1.423a1.482 1.482 0 0 1 1.673.04A5.993 5.993 0 0 1 14 6a5.996 5.996 0 0 1-2.786 5.068c-.157.1-.209.23-.207.315l.163 3.33a.752.752 0 0 1-1.094.714.75.75 0 0 1-.404-.64l-.164-3.345c-.027-.717.384-1.312.902-1.64A4.495 4.495 0 0 0 12.5 6a4.492 4.492 0 0 0-1.933-3.696c-.024.017-.067.067-.067.16v2.818a1.75 1.75 0 0 1-.767 1.448l-.75.51a1.75 1.75 0 0 1-1.966 0l-.75-.51A1.75 1.75 0 0 1 5.5 5.282V2.463c0-.092-.043-.142-.067-.159Z"></path>
                                    </svg>
                                    <p style={{color:"gray"}}>Use tools of the trade</p>
                                </div>
                                <div>
                                    <svg style={{cursor:"pointer"}} aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal">
                                       <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="startwritingcode-child-parentdiv">
                                <div className="startwritingcode-child-childs">
                                    <div style={{width:"92%"}}>
                                        <p style={{margin:"0",fontWeight:"600",fontSize:"14px",marginBottom:"10px"}}>Simplify your development workflow with a GUI</p>
                                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",height:"50px"}}>
                                            <img width={40} src="https://github.githubassets.com/images/modules/dashboard/onboarding/gh-desktop.png"/>
                                            <p style={{fontSize:"12px"}}><span className="workflowGIU-links">Install GitHub Desktop</span> to visualize, commit, and push changes without ever touching the command line. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="startwritingcode-child-childs">
                                    <div style={{width:"92%"}}>
                                        <p style={{margin:"0",fontWeight:"600",fontSize:"14px",marginBottom:"10px"}}>Get AI-based coding suggestions</p>
                                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                            <svg style={{width:"100px"}} viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-copilot mb-3">
                                                <path d="M23.922 16.992c-.861 1.495-5.859 5.023-11.922 5.023-6.063 0-11.061-3.528-11.922-5.023A.641.641 0 0 1 0 16.736v-2.869a.841.841 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.195 10.195 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952 1.399-1.136 3.392-2.093 6.122-2.093 2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.832.832 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256ZM12.172 11h-.344a4.323 4.323 0 0 1-.355.508C10.703 12.455 9.555 13 7.965 13c-1.725 0-2.989-.359-3.782-1.259a2.005 2.005 0 0 1-.085-.104L4 11.741v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.323 4.323 0 0 1-.355-.508h-.016.016Zm.641-2.935c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z"></path><path d="M14.5 14.25a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Zm-5 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z"></path>
                                            </svg>
                                            <p style={{fontSize:"12px"}}><span className="workflowGIU-links">Try GitHub Copilot free for 30 days,</span> which suggests entire functions in real time, right from your editor. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="footer">
                            <div id="footer-child1" style={{alignItems:"center",width:"100%"}}>
                                <svg style={{fill:"gray"}} aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github d-block mr-2 float-left">
                                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                </svg>
                                <p style={{color:"gray",fontSize:"12px"}}>© 2023 GitHub, Inc.</p>
                            </div>
                            <div id="footer-child2" style={{display:"flex",justifyContent:"space-evenly",width:"100%"}}>
                                <ul style={{listStyle:"none",margin:"0",padding:"0"}}>
                                    <li className="footer-lis">Blog</li>
                                    <li className="footer-lis">About</li>
                                    <li className="footer-lis">Shop</li>
                                    <li className="footer-lis">Contact GitHub</li>
                                    <li className="footer-lis">Pricing</li>
                                </ul>
                                <ul style={{listStyle:"none",margin:"0",padding:"0"}}>
                                    <li className="footer-lis">API</li>
                                    <li className="footer-lis">Trainig</li>
                                    <li className="footer-lis">Status</li>
                                    <li className="footer-lis">Security</li>
                                </ul>
                                <ul style={{listStyle:"none",margin:"0",padding:"0"}}>
                                    <li className="footer-lis">Terms</li>
                                    <li className="footer-lis">Privacy</li>
                                    <li className="footer-lis">Docs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="mainSection-childdiv2">
                        <div style={{width:"100%",height:"200px",border:"1px solid gray",borderRadius:"5px",display:"flex",justifyContent:"center",marginBottom:"20px"}}>
                            <div style={{width:"92%",height:"100%",marginTop:"20px",position:"relative"}}>
                                <p style={{margin:"0",fontWeight:"600",fontSize:"14px"}}>Advertisement</p>
                                <p style={{color:"gray",position:"absolute",top:"25%",left:"20%"}}>some GitHub Advertisement</p>
                            </div> 
                        </div>
                        <div style={{width:"100%",height:"200px",border:"1px solid gray",borderRadius:"5px",display:"flex",justifyContent:"center"}}>
                            <div style={{width:"92%",height:"100%",marginTop:"20px",position:"relative"}}>
                                <p style={{margin:"0",fontWeight:"600",fontSize:"14px"}}>Latest changes</p>
                                <p style={{color:"gray",position:"absolute",top:"25%",left:"20%"}}>some latest changes in GitHub</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        </section>
     );
}

export default HomePage;