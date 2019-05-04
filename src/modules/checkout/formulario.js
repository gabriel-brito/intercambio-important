import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Formulario = () => (
	<div>
		<Grid container spacing={24}>
			<Grid item xs={12}>
				<React.Fragment>
					<Typography variant="h6" gutterBottom>
						Dados do Cliente
					</Typography>
					<Grid container spacing={24}>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id="cpf"
								name="cpf"
								label="CPF"
								fullWidth
								autoComplete="fname"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id="email"
								name="email"
								label="E-mail"
								fullWidth
								autoComplete="fname"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id="firstName"
								name="firstName"
								label="Nome"
								fullWidth
								autoComplete="fname"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id="lastName"
								name="lastName"
								label="Sobrenome"
								fullWidth
								autoComplete="lname"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								id="address1"
								name="address1"
								label="Endereço"
								fullWidth
								autoComplete="billing address-line1"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id="city"
								name="city"
								label="Cidade"
								fullWidth
								autoComplete="billing address-level2"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								id="state"
								name="state"
								label="State/Province/Region"
								variant="outlined"
								fullWidth />
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id="zip"
								name="zip"
								label="Cep"
								fullWidth
								autoComplete="billing postal-code"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id="country"
								name="country"
								label="País"
								fullWidth
								autoComplete="billing country"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
								label="Use este endereço para informações de pagamento"
							/>
						</Grid>
					</Grid>
				</React.Fragment>
			</Grid>

			<Grid item xs={12}>
				<React.Fragment>
					<Typography variant="h6" gutterBottom>
						Informações de Pagamento
				</Typography>
					<Grid container spacing={24}>
						<Grid item xs={12} md={6}>
							<TextField 
								required 
								id="Bandeira" 
								label="Bandeira" 
								variant="outlined"
								fullWidth />
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField 
								required 
								id="Número do Cartão" 
								label="Card number" 
								variant="outlined"
								fullWidth />
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField 
								required 
								id="Validade" 
								label="Validade" 
								variant="outlined"
								fullWidth />
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								required
								id="cvv"
								label="CVV"
								helperText="Três números no verso do cartão"
								variant="outlined"
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox color="secondary" name="saveCard" value="yes" />}
								label="Salvar dados do cartão para próximas compras"
							/>
						</Grid>
					</Grid>
				</React.Fragment>
			</Grid>

			<Grid item xs={12}>
				<Button onClick={() => window.location.href = '/#/checkout'}
					variant="contained"
					color="primary"
				>
					Prosseguir
				</Button>
			</Grid>

		</Grid>

	</div>

);

export default Formulario;