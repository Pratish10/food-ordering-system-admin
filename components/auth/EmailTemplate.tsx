interface EmailTemplateProps {
  confirmLink: string
}

export const EmailTemplate = ({
  confirmLink
}: EmailTemplateProps): JSX.Element => (
  <div>
    <h3>Welcome!</h3>
    <h4>
      <a href={confirmLink}>Click Here</a> to confirm your email.
    </h4>
    <p>
      <strong>NOTE : </strong>The confirmation link will expire in 1 hour.
    </p>
  </div>
)

export const PasswordResetEmail = ({ confirmLink }: EmailTemplateProps): JSX.Element => (
  <div>
    <h3>Welcome!</h3>
    <h4>
      <a href={confirmLink}>Click Here</a> to reset your password.
    </h4>
    <p>
      <strong>NOTE : </strong>The reset link will expire in 1 hour.
    </p>
  </div>
)

export const SendTwoFactorMailTemplate = ({ token }: { token: string }): JSX.Element => (
  <div>
    <h3>Welcome!</h3>
    <h4>
      Your 2FA code is {token}. Please don not share this code to anyone else.
    </h4>
    <p>
      <strong>NOTE : </strong>The token will expire in 5 minutes.
    </p>
  </div>
)
