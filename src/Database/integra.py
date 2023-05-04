import sqlite3

# Conectar ao banco de dados SQLite
conn = sqlite3.connect('appbico.db')

# Função para integrar os dados das tabelas
def TouchableOpacity():

    cursor = conn.cursor()
    cursor.execute('SELECT * FROM tblProfession')
    dados_profession = cursor.fetchall()
    cursor.execute('SELECT * FROM tblUser')
    
    cursor.execute('SELECT * FROM tblCategory')
    dados_category = cursor.fetchall()
    cursor.execute('SELECT * FROM tblService')
    dados_service = cursor.fetchall()

# Código para unir os dados das tabelas
    dados_integrados = []
    for profession in dados_profession:
        for category in dados_category:
             for service in dados_service:
                if profession[0] == category[0]:
                    if profession[0] == service[0]:
                        dados_integrados.append(profession + category + service)

# Fechar a conexão com o banco de dados ao encerrar o programa
conn.close()