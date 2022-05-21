//This is my contact page and corresponding links

const Contact = (props) => {
  
    return (
        <div>

            <h1>Contact Me:</h1>
                <ul>
                    <li><a href={'https://www.linkedin.com/in/gabrielle-walsh-se/'} target="_blank">LinkedIn</a></li>
                    <li><a href={'mailto:gabmwalsh@gmail.com'} target="_blank">Email</a></li>
                    <li><a href={'https://github.com/SoPreoccupied'} target="_blank">GitHub</a></li>
                    <li><a href={'https://app.slack.com/client/T0351JZQ0/D039PJQ2T6Y'} target="_blank">Slack</a></li>
                    {/* 
                    Template of extra styling from my Portfolio
                    <a style="color: #FFF" role="button"><i class="fab fa-linkedin-in fa-3x animated faa-slow"></i></a>
                    <a style="color: #FFF" role="button"><i class="fab fa-google fa-3x animated faa-slow"></i></a>
                    <a style="color: #FFF" role="button"><i class="fab fa-github fa-3x animated faa-slow"></i></a>
                    <a style="color: #FFF" role="button"><i class="fab fa-slack-hash fa-3x animated faa-slow"></i></a>
                    */}
                </ul> 

        </div>
    )
}

export default Contact;